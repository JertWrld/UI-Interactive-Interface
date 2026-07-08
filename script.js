document.addEventListener('DOMContentLoaded', () => {
    // Dialog Overlay Handling Structure
    const openModalBtn = document.getElementById('trigger-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalOverlay = document.getElementById('overlay-container');
    
    const confirmbtn=document.getElementById('confirmbtn');

    openModalBtn.addEventListener('click', () => modalOverlay.classList.remove('hidden'));
    closeModalBtn.addEventListener('click', () => modalOverlay.classList.add('hidden'));
    confirmbtn.addEventListener('click', (e)=>{
        confirmbtn.style.display='blue';
        alert('Ok Confirmed You Can Now Click the Cancel Button');
        
    });

    // Field Event Validation Engine
    const submissionForm = document.getElementById('secured-form');
    const emailInput = document.getElementById('user-email');
    const validationNotice = document.getElementById('validation-notice');

    submissionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const rawValue = emailInput.value.trim();
        const structureCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!structureCheck.test(rawValue)) {
            validationNotice.classList.remove('hidden');
            emailInput.style.borderColor = '#ef4444';
        } else {
            validationNotice.classList.add('hidden');
            emailInput.style.borderColor = '#cbd5e1';
            alert('Signature structure matches baseline parameters!');
            submissionForm.reset();
        }
    });
});