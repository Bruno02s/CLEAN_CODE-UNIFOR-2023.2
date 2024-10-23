let statusAut = true;

function verAcesso(user) {
    if (statusAut && user.admin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let user = { nome: "João", admin: true };
verAcesso(user);
