import json
from pathlib import Path
from graphify.build import build_from_json

extraction = json.loads(Path('.graphify_extract.json').read_text())
analysis = json.loads(Path('.graphify_analysis.json').read_text())
G = build_from_json(extraction)
communities = {int(k): v for k, v in analysis['communities'].items()}

for cid, node_ids in sorted(communities.items()):
    labels = [G.nodes[n].get('label', n) for n in node_ids if n in G.nodes]
    print(f'C{cid}: {labels}')
