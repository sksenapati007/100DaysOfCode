# 🚨 Don't change the code below 👇
age = input("What is your current age?")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇

age_as_int = int(age)

years_remaining = 90 -age_as_int
days_rem = years_remaining * 365
weeks_rem = years_remaining * 52
months_rem = years_remaining * 12

print(f"You have {days_rem} days, {weeks_rem} weeks, {months_rem} months ")


