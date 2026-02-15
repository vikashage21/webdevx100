# def palindrome(s): 
#     i = 0 
#     j = len(s) - 1 

#     while i < j:
#         if s[i] != s[j]:
#             return False
#         i += 1 
#         j -= 1 

#     return True

# print(palindrome("madam")) # True



def palindrome (s):
  if s == s[::-1]:
       return True
  else:
        return False

print(palindrome("and")) # True