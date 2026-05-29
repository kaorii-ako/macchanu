import json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('.graphify_extract.json').read_text())
detection  = json.loads(Path('.graphify_detect.json').read_text())
analysis   = json.loads(Path('.graphify_analysis.json').read_text())

G = build_from_json(extraction)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

labels = {
    0:  "React App Shell",
    1:  "Brand & Design System",
    2:  "Tech Stack & Project Docs",
    3:  "Aquatic Mascot Logo",
    4:  "FF Food Brand",
    5:  "PTT Energy Sponsor",
    6:  "Home Page",
    7:  "Merch Page",
    8:  "Sponsorship Page",
    9:  "PostCSS Config",
    10: "Tailwind Config",
    11: "Vite Config",
    12: "Macchanu Logo Mark",
    13: "Macchanu Organization",
    14: "Thai Script Typography",
    15: "Macchanu Romanized Name",
    16: "Gold Color Token",
    17: "Deep Teal Color Token",
    18: "Green Accent Color",
    19: "Cloud Decorative Motif",
    20: "Botanical Motif",
    21: "White Background",
    22: "Matchanu Logo Variant",
    23: "Matchanu Organization",
    24: "Thai Wordmark",
    25: "Teal Brand Color",
    26: "Gold Brand Color",
    27: "Dark Green Accent",
    28: "Cloud Swirl Motif",
    29: "Water Wave Motif",
    30: "Lotus Motif",
    31: "Thai Mythological Theme",
    32: "Color Palette Composition",
    33: "Teal Palette Block",
    34: "Light Teal Block",
    35: "Dark Slate Block",
    36: "Steel Blue Block",
    37: "Crimson Accent Block",
    38: "Golden Yellow Block",
    39: "Pale Yellow Block",
    40: "Sage Green Block",
    41: "Forest Green Block",
    42: "Macchanu Banner",
    43: "Macchanu Thai Identity",
    44: "Koi Fish Illustration",
    45: "Thai Typography Mark",
    46: "Brand Color Palette",
}

questions = suggest_questions(G, communities, labels)
report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'],
                  detection, tokens, '.', suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding='utf-8')
Path('.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}))
print('Labels applied. Report updated.')
print('Suggested questions:')
for q in questions:
    print(' -', q)
