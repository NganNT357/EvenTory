// Biểu đồ
document.addEventListener("DOMContentLoaded", () => {
  // Combined Chart (Dòng 2)
  const combinedCtx = document.getElementById("combinedChart").getContext("2d");
  new Chart(combinedCtx, {
    type: "bar",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Vé đã bán",
          data: [1000, 1500, 2000, 2500, 3000],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          yAxisID: "y1",
        },
        {
          label: "Vé còn lại",
          data: [500, 300, 200, 100, 50],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          yAxisID: "y1",
        },
        {
          label: "Doanh thu (triệu VNĐ)",
          data: [50, 75, 100, 125, 150],
          type: "line",
          fill: false,
          borderColor: "rgba(54, 162, 235, 1)",
          yAxisID: "y",
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Doanh thu" } },
        y1: { beginAtZero: true, title: { display: true, text: "Số vé" }, position: "right" },
      },
    },
  });

  // Revenue Chart (Dòng 3)
  const revenueCtx = document.getElementById("revenueChart").getContext("2d");
  new Chart(revenueCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        { label: "2023", data: [10, 20, 15, 25, 30, 40, 35, 45, 50, 55, 60, 65], borderColor: "#ff2d95" },
        { label: "2024", data: [15, 25, 20, 30, 35, 45, 40, 50, 55, 60, 65, 70], borderColor: "#ffc1e3" },
        { label: "2025", data: [20, 30, 25, 35, 40, 50, 45, 55, 60, 65, 70, 75], borderColor: "#09397c" },
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });

  // Tickets Chart (Dòng 3)
  const ticketsCtx = document.getElementById("ticketsChart").getContext("2d");
  new Chart(ticketsCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        { label: "2023", data: [100, 150, 120, 180, 200, 250, 220, 280, 300, 320, 340, 360], borderColor: "#ff2d95" },
        { label: "2024", data: [120, 170, 140, 200, 220, 270, 240, 300, 320, 340, 360, 380], borderColor: "#ffc1e3" },
        { label: "2025", data: [140, 190, 160, 220, 240, 290, 260, 320, 340, 360, 380, 400], borderColor: "#09397c" },
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });

  // Ticket Type Chart (Dòng 4)
  const ticketTypeCtx = document.getElementById("ticketTypeChart").getContext("2d");
  new Chart(ticketTypeCtx, {
    type: "pie",
    data: {
      labels: ["VIP", "Standard", "General"],
      datasets: [{ data: [300, 500, 200], backgroundColor: ["#ff2d95", "#ffc1e3", "#09397c"] }],
    },
  });

  // Org Chart (Dòng 5)
  const orgCtx = document.getElementById("orgChart").getContext("2d");
  new Chart(orgCtx, {
    type: "pie",
    data: {
      labels: ["Org A", "Org B", "Org C", "Org D", "Org E"],
      datasets: [{ data: [50, 30, 20, 15, 10], backgroundColor: ["#ff2d95", "#ffc1e3", "#09397c", "#e4e4e4", "#f8eeff"] }],
    },
  });

  // Duyệt tài khoản
  const approveTable = document.getElementById("approveTable");
  approveTable.querySelectorAll(".approve-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr");
      row.classList.add("slide-up");
      setTimeout(() => {
        row.remove();
        alert("Đã thêm thành công!");
      }, 500);
    });
  });

  approveTable.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr");
      row.classList.add("slide-down");
      setTimeout(() => row.remove(), 500);
    });
  });
});