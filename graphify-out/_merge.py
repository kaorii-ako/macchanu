import json, glob
from pathlib import Path

# Merge semantic chunks
chunks = sorted(glob.glob('graphify-out/.graphify_chunk_*.json'))
all_nodes, all_edges, all_hyperedges = [], [], []
total_in, total_out = 0, 0
for c in chunks:
    d = json.loads(Path(c).read_text())
    all_nodes += d.get('nodes', [])
    all_edges += d.get('edges', [])
    all_hyperedges += d.get('hyperedges', [])
    total_in += d.get('input_tokens', 0)
    total_out += d.get('output_tokens', 0)

Path('graphify-out/.graphify_semantic.json').write_text(json.dumps({
    'nodes': all_nodes, 'edges': all_edges, 'hyperedges': all_hyperedges,
    'input_tokens': total_in, 'output_tokens': total_out,
}, indent=2))
print(f'Semantic: {len(all_nodes)} nodes, {len(all_edges)} edges from {len(chunks)} chunks')

# Merge AST + semantic
ast = json.loads(Path('.graphify_ast.json').read_text())
sem_nodes = all_nodes
sem_edges = all_edges

seen = {n['id'] for n in ast['nodes']}
merged_nodes = list(ast['nodes'])
for n in sem_nodes:
    if n['id'] not in seen:
        merged_nodes.append(n)
        seen.add(n['id'])

raw_edges = ast['edges'] + sem_edges
merged_edges = [e for e in raw_edges if e.get('source') and e.get('target')]
print(f'Filtered {len(raw_edges) - len(merged_edges)} malformed edges')
merged_hyperedges = all_hyperedges
merged = {
    'nodes': merged_nodes,
    'edges': merged_edges,
    'hyperedges': merged_hyperedges,
    'input_tokens': total_in,
    'output_tokens': total_out,
}
Path('.graphify_extract.json').write_text(json.dumps(merged, indent=2))
print(f'Total merged: {len(merged_nodes)} nodes, {len(merged_edges)} edges ({len(ast["nodes"])} AST + {len(sem_nodes)} semantic)')
