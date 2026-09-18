async function loadProxyStatus() {
  try {
    const response = await fetch("/api/proxy");
    const data = await response.json();

    document.getElementById("status").textContent =
      data.status === "online"
        ? "Proxy dashboard is online"
        : "Proxy is offline";

    document.getElementById("server").textContent =
      data.server || "---";

    document.getElementById("port").textContent =
      data.port || "---";

    document.getElementById("connections").textContent =
      data.connections ?? 0;

    document.getElementById("traffic").textContent =
      data.traffic || "0 MB";

    document.getElementById("uptime").textContent =
      data.uptime || "0h 0m";

  } catch (error) {
    document.getElementById("status").textContent =
      "Unable to contact server";

    console.error("Proxy status error:", error);
  }
}

function connectProxy() {
  alert(
    "The MTProto proxy endpoint will be available after the actual proxy server is configured."
  );
}

loadProxyStatus();

setInterval(loadProxyStatus, 10000);
