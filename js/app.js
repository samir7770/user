const usersData = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((users) => getUser(users.results));
};

usersData();

const getUser = (users) => {
  users.map((user) => {
    const parentRow = document.getElementById("row");
    parentRow.innerHTML += `
    <div class="col-6">
    <div class="my-3 custom rounded p-4 bg-light">
            <div class="row flex-row-reverse">
              <div class="col-lg-9">
                <div class="about-text go-to">
                  <h3 class="dark-color">${user.name.title} ${user.name.first} ${user.name.last}</h3>
                  <h6 class="theme-color lead"><mark>I am from</mark> ${user.location.country}</h6>
                  <div class="row about-list">
                    <div class="col-md-6">
                      <div class="media">
                        <label>Birthday</label>
                        <p>${user.dob.date}</p>
                      </div>
                      <div class="media">
                        <label>Age</label>
                        <p>${user.dob.age}</p>
                      </div>
                      <div class="media">
                        <label>Residence</label>
                        <p>${user.location.city}</p>
                        
                      </div>
                      <div class="media">
                        <label>Country</label>
                        <p>${user.location.country}</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="media">
                        <label>E-mail</label>
                        <p>${user.email}</p>
                      </div>
                      <div class="media">
                        <label>Phone</label>
                        <p>${user.phone}</p>
                      </div>
                      <div class="media">
                        <label>Gender</label>
                        <p>${user.gender}</p>
                      </div>
                      <div class="media">
                        <label>Freelance</label>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="about-avatar">
                  <img
                    src="${user.picture.large}"
                    title=""
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  });
};
