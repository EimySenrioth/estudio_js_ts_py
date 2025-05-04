q = str("papa")  # es un texto
w = int(20)
e = float(1.222)
r = complex(2, 3)  
t = list([1, 2, 3])  # es una coleccion de datos mutable
y = tuple((1, 2, 3))
u = range(99)
i = dict({"name": "papa", "age": 20})  # coleccion de pares clave valor de datos estructurado
o = set({1, 2, 3})  # coleccion de datos no ordenados y se utiliza para eliminar duplicados
p = frozenset({1, 2, 3})  # conjunto que no necesita modificarse
a = bool(5)  # f or t
s = bytes(4)
d = bytearray(5)
h = memoryview(bytes(6))

convert = float(w)  
convert2 = int(w)
convert3 = str(q)

print(convert, convert2, convert3)

print(q, w, e, r, t, y, u, i, o, p, a, s, d, h)
print(type(q), type(w), type(e), type(r), type(t), type(y), type(u), type(i), type(o), type(p), type(a), type(s), type(d), type(h))