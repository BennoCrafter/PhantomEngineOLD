from keras.models import Sequential
from keras.layers import Dense
from keras.utils import to_categorical
# from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df = pd.read_excel("FILE")

plt.imshow(df)
plt.show();

model = Sequential()
model.fit()