from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import tensorflow.keras

modelo = tensorflow.keras.models.load_model("C:/Users/HolaRocha/Desktop/CyberEquipo51/challenge1/api_Python/src/modeloEmployee2.h5")

app=Flask(__name__) #inicializamos la aplicacion

@app.route('/api/machineLearnig', methods=['POST'])
def cosumo_modelo():
    data=[request.json["sale_day"],request.json["customer_score"],request.json["losses_day"],request.json["Organization"],
    request.json["Responsibility"],request.json["Conduct"],request.json["Resource_management"],
    request.json["Conflict_management"],request.json["Contribution"]]
    predictions= modelo.predict([data])
    predictions=(predictions > 0.5)
    result=predictions[0][0]
    if result:
        return jsonify({'resultado':True})
    else:
        return jsonify({'resultado':False})

def paguina_no_encontrada(error):
    return jsonify({'mensaje':'la pagina que itentas buscar no exixte ..'})

if __name__=='__main__':#vemos si estamos en el archivo inicial 
    app.register_error_handler(404, paguina_no_encontrada)
    app.run(debug=True, port=3010)#esto nos sirve para actualizar cuando guardemos cambios cerrar el servidor y volverlo activar 