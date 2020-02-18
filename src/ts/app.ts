import * as api from 'rickmortyapi';

async function renderCharacter() {
  const selectedCharacter = await api.getCharacter(1);
}
