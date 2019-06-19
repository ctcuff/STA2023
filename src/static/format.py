"""
NOTE: This file only works when run with "npm run format-definitions"
"""

import os
from json import dumps

STATIC_DIR = 'src/static/'


def create_json(infile):
    """
    Takes any file named definitions-ch[CHAPTER].txt and outputs to
    definitions-ch[CHAPTER].json. This allows the definitions to be
    displayed in the Definitions.js component.
    """
    words = []
    outfile = os.path.splitext(infile)[0] + '.json'

    with open(STATIC_DIR + infile, 'r') as ifp, open(STATIC_DIR + outfile, 'w') as ofp:
        for line in ifp:
            parts = line.strip().split('-')
            item = {
                'word': parts[0].strip(),
                'definition': parts[1].strip()
            }
            words.append(item)

        words.sort(key=lambda dic: dic['word'])
        ofp.write(dumps(words, indent=2))

    print(f'Created {outfile} from {infile}')


if __name__ == '__main__':
    files = os.listdir(STATIC_DIR)
    files = [f for f in filter(lambda f: 'definitions-ch' in f and f.endswith('.txt'), files)]

    for file in files:
        create_json(file)
