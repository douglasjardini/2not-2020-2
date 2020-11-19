/*
    Estrutura de dados Lista Encadeada
*/
class Node {
    constructor(value) {
        this.data = value   // Armazenamento
        this.next = null    // Ponteiro para o próximo nodo
    }
}

module.exports = class linkeList {
    constructor() {
        this.head = null     // A lista inicia "sem cabeça"
        this.count = 0
    }

    // Inserção no fim da lista
    push(value) {
        let node = new Node(value)

        // Caso especial: a Lista está vazia
        if(this.count === 0) {
            this.head = node
        }
        else {
            let nodePos = this.head
            // Percurso da lista para encontrar o último elemento
            while(nodePos.next !=null) {
                nodePos = nodePos.next
            }
            // O último elemento ganha um nodo depois dele
            nodePos.next = node
        }
        this.count++
    }

    // Retorna o tamanho da lista
    size() {
        return this.count
    }

    // Transforma a lista em uma representação string para visualização
    toString() {
        let output = '{ '
        let node = this.head
        while(node !== null) {
            output += node.data + ' ' 
            node = node.next           
        }
        output += ' }'
        return output
    }

    // Insere um valor em uma posição informada pelo usuário
    insertAt(position, value) {
        // Validação da posição
        if(position >= 0 && position <= this.count) {
            let node = new Node(value)

            // Caso especial: inserção na posição 0
            if(position === 0) {
                node.next = this.head
                this.head = node     // Temos uma nova cabeça na lista
            }
            // Caso especial: inserção na última posição
            else if(position === this.count) {
                // Redireciona para o push
                this.push(value)
                return   // Evita que this.count++ seja executado novamente
            }
            else {
                let nodePos = this.head, nodePrev = null
                // O loop for começa em 1 porque o 0 é o head e já está no nodePos
                for(let i = 1; i <= position; i++) {
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }
                // O novo nodo passa a apontar para o próximo nodo atual da posição
                node.next = nodePos
                // O nodo anterior passa a apontar para o novo nodo
                nodePrev.next = node
            }
            this.count++
        }
    }

    // Remoção do último elemento
    pop() {
        if(this.count > 0) {

            let removed

            // Caso especial: Retirada do único elemento da lista
            if(this.count === 1) {
                removed = this.head
                this.head = null
            }
            else {
                let nodePos = this.head, nodePrev = null
                // Percurso da lista Encadeada
                while(nodePos.next != null) {
                    nodePrev = nodePos
                    nodePos = NodePos.next
                }
                // O último nodo removido
                removed = nodePos
                // O penultimo nodo passa a se o último. Para isso
                // indicamos que não há nada depois dele
                nodePrev.next = null
            }
            this.count--
            return removed.data
        }
    }
}