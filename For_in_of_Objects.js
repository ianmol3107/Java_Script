let obvalue={num1:15, num2:20, num3:25}
for(v in obvalue) // It will shown only KEYS of Objects!!!
{
    console.log(v)
}

for(v of Object.values(obvalue)) // It will shown the VALUES of Objects!!!
{
    console.log(v)
}

for([key,v] of Object.entries(obvalue)) // It will shown KEY & VALUE Both!!!
{
    console.log([key,v])
}