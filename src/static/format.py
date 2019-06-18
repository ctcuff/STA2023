from json import dumps

words = []
with open('definitions-ch3.txt', 'r') as infile, open('__OUT__.json', 'w') as outfile:
    for line in infile:
        parts = line.strip().split('-')
        item = {
            'word': parts[0].strip(),
            'definition': parts[1].strip()
        }
        words.append(item)
    words.sort(key=lambda dic: dic['word'])
    outfile.write(dumps(words, indent=2))
