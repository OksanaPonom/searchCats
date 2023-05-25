import { markupBreeds, markupInfoCat } from './markupBreeds';

export const select = document.querySelector('.breed-select');
export const info = document.querySelector('.cat-info');

select.classList.add('hidden');
select.addEventListener('change', onSelectChange);

markupBreeds();

function onSelectChange() {
  markupInfoCat(select.value);
}
