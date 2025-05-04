#miltiline string
"""
this is a comment with muliplr
lines
"""

#creating variables
x = 5
y = "lucy"

print(f"my name is {y} and my age us {x}")

#data type

y1 = str(3)
y2 = int(3)
y3 = float(3)

# Corregido el uso de f-string
print(f"the result is {y1} {y2} {y3}")
print(type(y1))
print(type(y2))
print(type(y3))

#variable names

myvar = "hola cheto"
my_var = "hoa gatico"
_my_var = "holap"
myVariableName = "harusiano"

my_variable_name = "cheto"

#asignado multiples variables

a1, a2, a3, = "pa", "pe","po"

x = w = f = str("tilin")

#desempacar variables

calificaciones = ["matematica", "fisica", "quimica"]
a, v, c = calificaciones


#variables globales

x33 = "global x33"

def myfunc():
    print(f"this is a {x33}")

myfunc()

def myfunc2():
    global y33
    y33 = "local y33"

myfunc2()

#to change a global variable inside a function

e44 = "global e44"
def myfunct4():
    global e44
    e44 = "local e44"
myfunct4()

print(e44)