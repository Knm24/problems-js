<script>
  let getValueUsername;
  let useJSONDATA;
  function showName() {
    fetchAll(getValueUsername).then((userData) => {
      console.log(userData);
      useJSONDATA = userData;
    });
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
  <label for="username">devfinder</label>
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
    <p class="avatar"><img src={useJSONDATA?.avatar_url ?? ''} alt="" /></p>
    <h2 class="title"><span>{useJSONDATA?.created_at ?? ''}</span></h2>
    <h3 class="login"><span>{useJSONDATA?.login ?? ''}</span></h3>
    <p class="bio"><span>{useJSONDATA?.bio ?? ''}</span></p>
    <p class="date">{useJSONDATA?.created_at ?? ''}</p>
    <p class="Repos">Repos <span>{useJSONDATA?.public_repos ?? ''}</span></p>
    <p class="Followers">
      Followers <span>{useJSONDATA?.followers || ''}</span>
    </p>
    <p class="Following">
      Following <span>{useJSONDATA?.following || ''}</span>
    </p>
    <p class="location">{useJSONDATA?.location || ''}</p>
    <p class="twiiter">{useJSONDATA?.twitter_username || ''}</p>
    <p class="link">{useJSONDATA?.html_url || ''}</p>
    <p class="hub">{useJSONDATA?.following || ''}</p>
  </div>
</section>
