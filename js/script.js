document.getElementById('sintomas-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const sintomasInput = document.getElementById('sintomas').value;
    const sintomas = sintomasInput.split(',').map(sintoma => sintoma.trim().toLowerCase());

    const doencas = {
        'leptospirose': ['febre Alta', 'dor de cabeça', 'sangramento', 'dor muscular', 'calafrio', 'olhos vermelhos', 'vomito'],
        'tétano': ['contrações musculares na mandibula', 'contrações musculares no pescoço', 'dificuldade para respirar', 'febre', 'pressão alta', 'sudorese'],
        'diarreia aguda': ['sangramento nas fezes', 'dores abdominais', 'muco nas fezes'],
        'hepatite A': ['fadiga', 'pele amarela', 'urina escura', 'fezes claras', 'perda de apetite'],
        'dengue': ['febra alta', 'dor muscular', 'manchas vermelhas no corpo', 'dores nas articulações', 'hemorragia', 'dificuldade para respirar', 'inchaço', 'dor de cabeça'],
        'animais peçonhentos (aranhas, cobra, lacraias e escorpiões)': ['dor' ,'eritema', 'hematoma', 'formação de bolhas']
    };

    let maiorCoincidencia = 0;
    let doencaProvavel = null;

    for (const [doenca, sintomasDoenca] of Object.entries(doencas)) {
        const coincidencias = sintomasDoenca.filter(sintoma => sintomas.includes(sintoma)).length;
        if (coincidencias > maiorCoincidencia) {
            maiorCoincidencia = coincidencias;
            doencaProvavel = doenca;
        }
    }

    let resultado = doencaProvavel
        ? `Os sintomas mais prováveis correspondem à doença: ${doencaProvavel}`
        : 'Não foi possível identificar a doença com os sintomas fornecidos.';

    document.getElementById('resultado').textContent = resultado;
});
