const tabsBtnItems = document.querySelectorAll(".tabs__btn-item");
const tabsContent = document.querySelectorAll(".tabs__content-item");

tabsBtnItems.forEach((item) => {
  item.addEventListener("click", openTab);
});

function openTab(evt) {
  const activeTab = evt.currentTarget;
  const activeTabsContent = document.querySelector(
    `#${activeTab.dataset.button}`
  );

  tabsBtnItems.forEach((item) =>
    item.classList.remove("tabs__btn-item--active")
  );

  activeTab.classList.add("tabs__btn-item--active");

  tabsContent.forEach((item) =>
    item.classList.remove("tabs__content-item--active")
  );

  activeTabsContent.classList.add("tabs__content-item--active");
}
