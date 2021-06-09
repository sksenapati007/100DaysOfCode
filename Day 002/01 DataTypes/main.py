#Data Types

# Strings
# Subscript get a particular index character from the string using [index_number]
print("Shubhendu"[8])

print("123" + "345")

# Integer
print(123 + 345)

# to put , 
print(123_456)

# Float
print(3.14159)

# Boolean
print(True)

# to check the type of data
num_char = len(input("Enter your Name.."))
print(type(num_char))

# Typecasting (to solve typeError in the below code)

new_num_char =str(num_char)
print("ur name has "+new_num_char+" characters.")


a = float(123)
print(type(a))


print(70 + float("100.5"))
print(str(70)+str(100))

num = int(input("Enter a 2 digit number :"))
add = int(num%10)+int(num/10)
print(add)

#  OR

two_digit_num = input("Enter a 2 digit number :")
s_digit = int(two_digit_num[0])
f_digit = int(two_digit_num[1])

result = s_digit + f_digit

print(result)

#  arithmetic operators
#  PEMDASLR
# Parantheses ()
# Exponent **
# Multiplication *
# Division /
# Addition +
# Subtraction -
