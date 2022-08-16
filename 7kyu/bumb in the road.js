let x = '__nn_nnnn__n_n___n____nn__nnn'

x = x.replace(/_/g, '')
return x.length > 15 ? 'Car Dead' : 'Woohoo!'

