
function startGame() {
    document.getElementById('panel').style.display = 'flex';
    document.getElementById('game').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
    document.getElementById('imgTable').style.display = 'none';
    const title = document.getElementById('title')
    title.style.textAlign = 'left';
    title.style.fontSize = '1.5em';
    document.getElementById('periodic-table-container').style.display = 'initial';

    startCountDown();
    selectNextElement("");
} 

let temp = new Number();
temp = 179;
function startCountDown() {
    if((temp - 1) >= 0) {
        let min = parseInt(temp/60);
        let sec = temp%60;

        if(min < 10) {
            min = "0" + min;
            min = min.substr(0,2);
        } 

        if (sec <= 9) {
            sec = "0" + sec;
        }
        document.getElementById('timer').innerHTML = min + ":" + sec;
        setTimeout('startCountDown()', 1000);
        temp--;
    } else {
        document.getElementById('timer').innerHTML = "00:00";
        document.getElementById('elementBox').style.display = 'none';
        document.getElementById('elementNext').style.display = 'none';
        document.getElementById('elementPrevious').style.display = 'none';
        document.getElementById('periodic-table-container').style.display = 'none';
        document.getElementById('textGame').innerHTML = "GAME OVER!";
    }
}

const eMap = new Map();
eMap.set(1, {number: '1', symbol: 'H', name: 'Hidrogênio', family: '1A', mass: '1.008', ce: '1s¹'});
eMap.set(2, {number: '2', symbol: 'He', name: 'Hélio', family: '8A', mass: '4.003', ce: '1s²'});
eMap.set(3, {number: '3', symbol: 'Li', name: 'Lítio', family: '1A', mass: '6.941', ce: '1s²2s¹'});
eMap.set(4, {number: '4', symbol: 'Be', name: 'Berílio', family: '2A', mass: '9.012', ce: '1s²2s²'});
eMap.set(5, {number: '5', symbol: 'B', name: 'Boro', family: '3A', mass: '10.811', ce: '1s²2s²2p¹'});
eMap.set(6, {number: '6', symbol: 'C', name: 'Carbono', family: '4A', mass: '12.011', ce: '1s²2s²2p²'});
eMap.set(7, {number: '7', symbol: 'N', name: 'Nitrogênio', family: '5A', mass: '14.007', ce: '1s²2s²2p³'});
eMap.set(8, {number: '8', symbol: 'O', name: 'Oxigênio', family: '6A', mass: '15.999', ce: ''});
eMap.set(9, {number: '9', symbol: 'F', name: 'Flúor', family: '7A', mass: '18.998', ce: ''});
eMap.set(10, {number: '10', symbol: 'Ne', name: 'Neônio', family: '8A', mass: '20.18', ce: ''});
eMap.set(11, {number: '11', symbol: 'Na', name: 'Sódio', family: '1A', mass: '22.99', ce: '[Ne]3s¹'});
eMap.set(12, {number: '12', symbol: 'Mg', name: 'Magnésio', family: '2A', mass: '24.305', ce: '[Ne]3s²'});
eMap.set(13, {number: '13', symbol: 'Al', name: 'Alumínio', family: '3A', mass: '26.982', ce: '[Ne]3s²3p¹'});
eMap.set(14, {number: '14', symbol: 'Si', name: 'Silício', family: '4A', mass: '28.086', ce: '[Ne]3s²3p²'});
eMap.set(15, {number: '15', symbol: 'P', name: 'Fósforo', family: '5A', mass: '30.974', ce: '[Ne]3s²3p³'});
eMap.set(16, {number: '16', symbol: 'S', name: 'Enxofre', family: '6A', mass: '32.065', ce: ''});
eMap.set(17, {number: '17', symbol: 'Cl', name: 'Cloro', family: '7A', mass: '35.453', ce: ''});
eMap.set(18, {number: '18', symbol: 'Ar', name: 'Argônio', family: '8A', mass: '39.948', ce: ''});
eMap.set(19, {number: '19', symbol: 'K', name: 'Potássio', family: '1A', mass: '39.098', ce: '[Ar]4s¹'});
eMap.set(20, {number: '20', symbol: 'Ca', name: 'Cálcio', family: '2A', mass: '40.078', ce: '[Ar]4s²'});
eMap.set(21, {number: '21', symbol: 'Sc', name: 'Escândio', family: '3B', mass: '40.956', ce: '[Ar]3d¹4s²'});
eMap.set(22, {number: '22', symbol: 'Ti', name: 'Titânio', family: '4B', mass: '47.867', ce: '[Ar]3d²4s²'});
eMap.set(23, {number: '23', symbol: 'V', name: 'Vanádio', family: '5B', mass: '50.942', ce: '[Ar]3d³4s²'});
eMap.set(24, {number: '24', symbol: 'Cr', name: 'Cromo', family: '6B', mass: '51.996', ce: ''});
eMap.set(25, {number: '25', symbol: 'Mn', name: 'Manganês', family: '7B', mass: '54.938', ce: ''});
eMap.set(26, {number: '26', symbol: 'Fe', name: 'Ferro', family: '8B', mass: '55.845', ce: ''});
eMap.set(27, {number: '27', symbol: 'Co', name: 'Cobalto', family: '8B', mass: '58.933', ce: ''});
eMap.set(28, {number: '28', symbol: 'Ni', name: 'Níquel', family: '8B', mass: '58.693', ce: ''});
eMap.set(29, {number: '29', symbol: 'Cu', name: 'Cobre', family: '1B', mass: '63.546', ce: ''});
eMap.set(30, {number: '30', symbol: 'Zn', name: 'Zinco', family: '2B', mass: '65.409', ce: ''});
eMap.set(31, {number: '31', symbol: 'Ga', name: 'Gálio', family: '3A', mass: '69.723', ce: ''});
eMap.set(32, {number: '32', symbol: 'Ge', name: 'Germânio', family: '4A', mass: '72.64', ce: ''});
eMap.set(33, {number: '33', symbol: 'As', name: 'Arsênio', family: '5A', mass: '74.922', ce: ''});
eMap.set(34, {number: '34', symbol: 'Se', name: 'Selênio', family: '6A', mass: '78.96', ce: ''});
eMap.set(35, {number: '35', symbol: 'Br', name: 'Bromo', family: '7A', mass: '79.904', ce: ''});
eMap.set(36, {number: '36', symbol: 'Kr', name: 'Criptônio', family: '8A', mass: '83.798', ce: ''});
eMap.set(37, {number: '37', symbol: 'Rb', name: 'Rubídio', family: '1A', mass: '85.468', ce: '[Kr]5s¹'});
eMap.set(38, {number: '38', symbol: 'Sr', name: 'Estrôncio', family: '2A', mass: '87.62', ce: '[Kr]5s²'});
eMap.set(39, {number: '39', symbol: 'Y', name: 'Ítrio', family: '3B', mass: '88.906', ce: '[Kr]4d¹5s²'});
eMap.set(40, {number: '40', symbol: 'Zr', name: 'Zircônio', family: '4B', mass: '91.224', ce: '[Kr]4d²5s²'});
eMap.set(41, {number: '41', symbol: 'Nb', name: 'Nióbio', family: '5B', mass: '92.906 38', ce: '[Kr]4d³5s²'});
eMap.set(42, {number: '42', symbol: 'Mo', name: 'Molibdênio', family: '6B', mass: '95.94', ce: ''});
eMap.set(43, {number: '43', symbol: 'Tc', name: 'Tecnécio', family: '7B', mass: '98', ce: ''});
eMap.set(44, {number: '44', symbol: 'Ru', name: 'Rutênio', family: '8B', mass: '101.07', ce: ''});
eMap.set(45, {number: '45', symbol: 'Rh', name: 'Ródio', family: '8B', mass: '102.905 50', ce: ''});
eMap.set(46, {number: '46', symbol: 'Pd', name: 'Paládio', family: '8B', mass: '106.42', ce: ''});
eMap.set(47, {number: '47', symbol: 'Ag', name: 'Prata', family: '1B', mass: '107.868', ce: ''});
eMap.set(48, {number: '48', symbol: 'Cd', name: 'Cádmio', family: '2B', mass: '112.411', ce: ''});
eMap.set(49, {number: '49', symbol: 'In', name: 'Índio', family: '3A', mass: '114.818', ce: ''});
eMap.set(50, {number: '50', symbol: 'Sn', name: 'Estanho', family: '4A', mass: '118.71', ce: ''});
eMap.set(51, {number: '51', symbol: 'Sb', name: 'Antimônio', family: '5A', mass: '121.76', ce: ''});
eMap.set(52, {number: '52', symbol: 'Te', name: 'Telúrio', family: '6A', mass: '128.6', ce: ''});
eMap.set(53, {number: '53', symbol: 'I', name: 'Iodo', family: '7A', mass: '126.904 47', ce: ''});
eMap.set(54, {number: '54', symbol: 'Xe', name: 'Xenônio', family: '8A', mass: '131.293', ce: ''});

const element = eMap.values();
function selectNextElement(item) {
    const e = element.next().value;
    document.getElementById('eBoxName').innerHTML = e.name;
    console.log(item.target);
}


//essa função não está retornando os elementos.
function selectPreviousElement() {
    const e = element.next().value;
    document.getElementById('eBoxName').innerHTML = e.name;
    console.log(e);
}

document.getElementById('btnStart').onclick = startGame;
document.getElementById('elementNext').onclick = selectNextElement;
document.getElementById('elementPrevious').onclick = selectPreviousElement;
const els = document.getElementsByClassName("element")
for(var i = 0; i < els.length; i++) {
    els[i].onclick = selectNextElement;
}
