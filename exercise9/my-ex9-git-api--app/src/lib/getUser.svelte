<script>
  let getValueUsername;

  function showName() {
    fetchAll(getValueUsername).then((value) => console.log(value));
  }

  const fetchAll = async (searchName) => {
    console.log('searchName');

    console.log(searchName);

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
        `https://api.github.com/users/${searchName}`,
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
</script>

<section class="userSearch">
  <label for="username"></label>
  <input
    type="text"
    id="username"
    placeholder="Search GitHub username…"
    bind:value={getValueUsername}
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
