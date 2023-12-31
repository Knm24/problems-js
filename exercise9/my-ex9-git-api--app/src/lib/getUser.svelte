<script>
  let valueName;

  function showName() {
    console.log(valueName);
  }

  const fetchAll = async () => {
    try {
      let headers1 = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      };

      const response = await fetch(
        `https://api.github.com/users/talg`,
        headers1
      );

      if (!response.ok) {
        throw new Error(
          `GitHub API request failed with status ${response.status}`
        );
      }

      let dataNew = await response.json();

      return dataNew;
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  fetchAll().then((value) => console.log(value.login));

  /*
  let getDataResult = fetchAll().then((rez) => {
    return rez;
  });
  console.log(getDataResult);
  */

  /*
  const data = async () => {
    await fetchAll();
  };
  data().then(function (result) {
    console.log(result);
  });
  console.log('data(-)');

  */
</script>

<section class="userSearch">
  <label for="username"></label>
  <input
    type="text"
    id="username"
    placeholder="Search GitHub username…"
    bind:value={valueName}
  />
  <button type="submit" on:click={showName}>Search</button>
</section>

<section class="userResult">
  <div>
    <h2 class="login">login</h2>
    <p class="date"></p>
    <p class="Repos">Repos:</p>
    <p class="Followers">Followers:</p>
    <p class="Following">Following:</p>
  </div>
</section>
