from keras.models import Sequential
from keras.layers import Dense
from keras.utils import to_categorical
# from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df = pd

def read_csv(filepath):
    df = pd.read_csv(filepath)

def read_exel(filepath):
    df = pd.read_excel(filepath)

def read_clipboard():
    clip = pd.read_clipboard()
    return clip

def read_html(filepath):
    df = pd.read_html(filepath)

def read_json(filepath):
    df = pd.read_json(filepath)

def read_xml(filepath):
    df = pd.read_xml(filepath)

def read_sql(filepath):
    df = pd.read_sql(filepath)

def read_sql_query(filepath):
    df = pd.read_sql_query(filepath)

def read_sql_table(filepath):
    df = pd.read_sql_table(filepath)


def create_nn(amout_hiddenlayer_neurons, amot_outputplayer_neurons, activation_inner, input_shape_inner, loss_inner, metrics_inner, epochs_inner, batch_size_inner):
    model = Sequential()

    model.add(Dense(amout_hiddenlayer_neurons, activation=activation_inner, input_shape=(input_shape_inner,)))
    model.add(Dense(amot_outputplayer_neurons, activation=activation_inner))

    model.compile(optimizer="sgd", loss=loss_inner, metrics=[metrics_inner])

    model.fit(df.reshape(df.array.lenght, input_shape_inner), df, epochs=epochs_inner, batch_size=batch_size_inner)
    print(model.evaluate(df.reshape(df.array.lenght, input_shape_inner), df))

    plt.imshow(df[1], cmap="gray_r")
    plt.show()

    print(model.predict(df[1].reshape(1, 784)))