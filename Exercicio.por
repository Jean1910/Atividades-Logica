programa
{
	funcao inicio()
	{
	// Declaração das variáveis
	inteiro vetor[10]
	inteiro soma = 0
	real media = 0.0
	inteiro i // Variável contadora para os laços de repetição

	
	// Este laço 'para' vai de 0 a 9 (10 posições)
	para(i = 0; i < 10; i++)
		{
	escreva("Digite o ", i + 1, "º número: ")
	leia(vetor[i]) 
	// Acumula o valor lido na variável 'soma'
	soma = soma + vetor[i] 
		}

	// Limpa a tela para organizar a saída (opcional)
	limpa() 


	// Elementos nos índices ímpares 
	escreva("Elementos nos índices ímpares:\n")
	para(i = 0; i < 10; i++)
		{
		// O operador '%' calcula o resto da divisão. 
		// Se o resto da divisão do índice (i) por 2 for diferente de 0, o índice é ímpar.
		se (i % 2 != 0) 
			{
			escreva(vetor[i] + " ")
			}
		}

	// Elementos Pares 
	escreva("\n\nElementos pares:\n")
	para(i = 0; i < 10; i++)
		{
		// Aqui verificamos se o valor dentro do vetor é par
		se (vetor[i] % 2 == 0) 
			{
			escreva(vetor[i] + " ")
			}
		}

	// Cálculo da Média 
	// Calculamos a média depois do loop de soma
	// Dividimos por 10.0 (um número real) para garantir que o resultado seja real
	media = soma / 10.0 

	// Soma e Média
	escreva("\n\nSoma: ", soma)
	escreva("\nMédia: ", media) 
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 642; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */