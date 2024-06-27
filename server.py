from flask import Flask, request, jsonify
from temp import isSafe,solveSudoku
import json
N=9
app = Flask(__name__)

@app.route('/modify-array', methods=['POST'])
def modify_array():
    try:
        received_data = request.data
        decoded_data = received_data.decode('utf-8')
        pyList = json.loads(decoded_data)

        # Handle string numbers (optional, modify based on requirements)
        for i in range(len(pyList)):
            if isinstance(pyList[i], str) and pyList[i].isdigit():
                pyList[i] = int(pyList[i])  # Convert string number to integer

        print('Received list:', pyList)
    except json.JSONDecodeError as error:
        return jsonify({'error': 'Invalid JSON data'}), 400

    modified_list = [element for element in pyList]
    sudoku=[]
    for i in range(0,81,9):
        temp=[]
        for j in range(i,i+9):
            temp.append(modified_list[j])
        sudoku.append(temp)
    if (solveSudoku(sudoku, 0, 0)):
        print("solution exists")
        for i in range(0,9):
            for j in range(0,9):
                modified_list[(9*i)+j]=sudoku[i][j]
    else:
            print("no solution  exists ")      
    return jsonify(modified_list)


if __name__ == '__main__':
  app.run(port=5500, debug=True)  # Enable Flask debug mode for detailed logs
