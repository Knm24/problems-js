<script>
  const fetchAll = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/1`);
      if (!response.ok) {
        throw new Error(
          `GitHub API request failed with status ${response.status}`
        );
      }
      this.user = await response.json();
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  console.log(fetchAll);
</script>

<section class="userSearch">
  <label for="username"></label>
  <input
    type="text"
    id="username"
    value=""
    placeholder="Search GitHub username…"
  />
  <button>Search</button>
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
