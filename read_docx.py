import zipfile
import xml.etree.ElementTree as ET
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def read_docx(path):
    with zipfile.ZipFile(path) as docx:
        xml_content = docx.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        text = []
        for p in tree.iterfind('.//w:p', ns):
            p_text = ''.join(node.text for node in p.iterfind('.//w:t', ns) if node.text)
            if p_text:
                text.append(p_text)
        return '\n'.join(text)

if __name__ == '__main__':
    print(f"--- {sys.argv[1]} ---")
    try:
        with open('output.txt', 'a', encoding='utf-8') as f:
            f.write(f"\n--- {sys.argv[1]} ---\n")
            f.write(read_docx(sys.argv[1]))
        print("Done")
    except Exception as e:
        print(f"Error: {e}")
