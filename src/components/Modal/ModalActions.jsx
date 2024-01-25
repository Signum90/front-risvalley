export function closeModal () {
  const modal = document.getElementById('modalContainer')
  modal.classList.add('hidden')
}

export function showModal () {
  const modal = document.getElementById('modalContainer')
  modal.classList.remove('hidden')
}