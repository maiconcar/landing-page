function SubmitForm() {
  const modal = document.getElementById('modal')
  modal.classList.add('show')

  modal.addEventListener('click', event => {
    if (event.target.id === 'modal' || event.target.className === 'close-button') {
      modal.classList.remove('show')
    }
  })
}
