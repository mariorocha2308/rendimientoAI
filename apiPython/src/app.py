from logging import debug
from flask import Flask, request,jsonify
import tensorflow
modelbetter = tensorflow.keras.models.load_model('./modeloEmployee.h5')

app= Flask(__name__)#para saber si esta es principla

@app.route('/api/machineLearnig', methods=['POST'])
def respuesta_modelo():
    #data=[sale_day	customer_score	losses_day	Organization	Responsibility	Conduct	Resource_management	Conflict_management	Contribution]
    data=[request.json['sale_day'],request.json['customer_score'],request.json['losses_day'],request.json['Organization'],
    request.json['Responsibility'],request.json['Conduct'],request.json['Resource_management'],request.json['Conflict_management'],request.json['Contribution']]
    print(data)
    return jsonify(data)

def paguina_no__encontrada(error):
    return jsonify({'mensaje':'la pagina que itentas buscar no exixte ..'}),404


if __name__=='__main__':
    app.register_error_handler(404,paguina_no__encontrada)
    app.run(debug=True,port=3010)