"""
Create the react function by default

"""
def create_file(filename):
    file = f'{filename}.js'
    content =f'export default function {filename}(){{ \n return ( \n <div className="{filename}"> \n </div> \n ) \n}}'
    with open(file,'w') as f:
        f.write(content)


# creating the node  module
if __name__ == '__main__':
    import sys
    filename=sys.argv[1]
    create_file(filename)