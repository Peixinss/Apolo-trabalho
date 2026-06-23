        function trocarFoto(miniatura, src) {
            document.getElementById('foto-principal').src = src;
            document.querySelectorAll('.miniaturas img').forEach(img => img.classList.remove('ativa'));
            miniatura.classList.add('ativa');
        }

        function adicionarCarrinho() {
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        }
    