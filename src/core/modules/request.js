export const requestToServer = () => {
  const getAnswer = () => {
    const url = './assets/server-ok.json';
    /* const url = null; */
    const error = './assets/server-error.json';

    const link = url ? url : error;

    const request = fetch(link)
      .then((res) => res.json())
      .then((data) => data)
      .catch(() => {
        throw new Error('Bad response');
      });

    return request;
  };

  const form = document.querySelector('.main__form');
  const section = document.querySelector('.main__title');

  const renderAnswer = async () => {
    const answer = await getAnswer();
    form.remove();
    section.insertAdjacentHTML(
      'afterEnd',
      `
				<main class="main__request">
					<p class="request__title">${answer.request__title}</p>
					<span class="request__text">${answer.request__description}</span>
					<p class="request__login">${answer.request__login}
						<a href="#" class="login__href">${answer.login__href}</a>
					</p>
				</main>
			`,
    );
  };

  renderAnswer();
};
