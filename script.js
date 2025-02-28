function showInstructionPDF() {
    var instructions = document.getElementById('instructions');
    // Toggle display between block and none
    if (instructions.style.display === 'none' || instructions.style.display === '') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
}
