export function closeModal () {
  const modal = document.getElementById('modalLoginRegister')
  modal.classList.add('hidden')
}

export function showModal () {
  const modal = document.getElementById('modalLoginRegister')
  modal.classList.remove('hidden')
}