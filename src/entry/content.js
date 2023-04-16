// import axios from "axios";

if (typeof browser === "undefined") {
  var browser = chrome;
}
console.log("content script loaded")

// browser.runtime.onMessage.addListener((data) => {
//   console.log(data)
//   var event = new CustomEvent("RecieveContent", { detail: data });
//   window.dispatchEvent(event);
//   return Promise.resolve({ response: "Hi from content script" });
// });

window.addEventListener("message", function (event) {
  if (event.source != window) {
    return;
  }
  if (event.data.type && event.data.type == "__CHEM_LOGIN__") {
    browser.runtime.sendMessage({
      action: "_chem_user_authenticated",
      content: event.data.content,
    });
  }
  if (event.data.type && event.data.type == "__CHEM_LOGOUT__") {
    browser.runtime.sendMessage({ action: "_chem_user_logout" });
  }
});

var chemButton = document.createElement('button');
chemButton.setAttribute("id", "chem_icon")
chemButton.setAttribute('style', 'text-align: left; background-color: #F2F2F2; border: 1px solid rgba(60,64,67,.15); border-radius: 50px; display: flex; padding: 5px 5px; align-items: center; width: 170px; color: white; text-decoration: none; position: fixed; z-index: 10000; cursor: pointer; top: 80px; right: -118px;')
chemButton.innerHTML = "<svg height='45px' width='45px' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><path d='m300 150c0 82.843-67.157 150-150 150-82.843 0-150-67.157-150-150 0-82.843 67.157-150 150-150 82.843 0 150 67.157 150 150z' fill='#F2F2F2'/><path d='m135.71 22.712-89.694 51.557c-8.6716 4.9677-14.018 14.182-14.015 24.157v103.11c-0.0725 9.906 5.1363 19.105 13.679 24.157l89.695 51.557c8.672 4.995 19.357 4.995 28.029 0l89.694-51.557c8.612-5.013 13.905-14.211 13.902-24.157v-103.11c0.073-9.8771-5.083-19.06-13.566-24.157l-89.694-51.557c-8.684-4.9488-19.344-4.9488-28.029 0z' fill='#D00000'/><path d='m245.32 156.66c-9.457-3.451-19.976 1.51-23.515 11.09-0.044 0.118-0.053 0.237-0.094 0.36l-18.602 6.19c-7.939-10.511-21.376-15.149-34.138-11.784l-20.691-31.326c9.239-12.436 8.785-29.587-1.094-41.302l8.901-15.395c7.798-0.9937 14.146-6.9069 15.762-14.683s-1.862-15.672-8.636-19.605c-6.774-3.934-15.326-3.0245-21.235 2.2583s-7.85 13.755-4.821 21.037l-8.873 15.35c-9.46-1.7718-19.256 0.7546-26.79 6.9088-7.5341 6.1542-12.044 15.314-12.332 25.048l-18.626 6.182c-1.2698-0.919-2.6546-1.664-4.1192-2.219-6.9257-2.537-14.727-0.594-19.766 4.923-5.0389 5.517-6.3232 13.522-3.2541 20.281 3.0692 6.76 9.8873 10.943 17.275 10.6 7.3879-0.344 13.891-5.146 16.476-12.169 0.0434-0.118 0.0522-0.237 0.0935-0.36l18.602-6.19c7.9382 10.511 21.376 15.149 34.138 11.784l20.69 31.326c-9.239 12.437-8.784 29.587 1.095 41.302l-8.901 15.395c-7.799 0.994-14.146 6.907-15.762 14.683s1.862 15.671 8.636 19.605 15.326 3.025 21.234-2.258c5.909-5.283 7.851-13.755 4.821-21.037l8.873-15.35c9.46 1.772 19.257-0.754 26.791-6.908 7.534-6.155 12.043-15.314 12.331-25.049l18.627-6.181c1.269 0.918 2.654 1.664 4.119 2.218 9.457 3.464 19.985-1.501 23.515-11.09s-1.274-20.17-10.731-23.635zm-109.86-75.597 9.787-16.934c1.032-1.7657 3.277-2.3671 5.014-1.3433 1.738 1.0238 2.309 3.2852 1.277 5.0509l-9.765 16.887c-1.96-1.4556-4.078-2.6833-6.313-3.6602zm22.418-35.251c4.022 1.46 6.802 5.1689 7.111 9.4853 0.308 4.3164-1.912 8.4433-5.678 10.554 0.025-3.9101-2.011-7.5164-5.345-9.4682s-7.463-1.9546-10.84-0.0073c-0.066-3.6451 1.67-7.1031 4.63-9.2227s6.755-2.6226 10.122-1.3414zm-101.68 96.737c-5.6741-2.079-8.5569-8.427-6.4388-14.181 2.1181-5.753 8.435-8.732 14.109-6.654 5.6742 2.079 8.557 8.428 6.4389 14.181s-8.435 8.733-14.109 6.654zm19.696-19.582 22.885-7.605c1.914-0.638 3.962 0.398 4.587 2.319 0.615 1.937-0.434 4.03-2.352 4.691l-22.884 7.633c-0.2638-2.48-1.0246-4.875-2.2361-7.038zm27.49 6.354c4.181-1.466 7.111-5.311 7.438-9.757 0.326-4.447-2.015-8.63-5.942-10.617-2.529-1.289-5.469-1.517-8.1853-0.634 1.4556-10.897 9.5603-19.748 20.21-22.071 10.65-2.3227 21.52 2.3904 27.104 11.752 5.583 9.3625 4.663 21.328-2.297 29.84-6.959 8.511-18.437 11.707-28.621 7.971-3.699-1.362-7.023-3.585-9.707-6.484zm33.595 11.557c2.198-1.15 4.264-2.544 6.159-4.155l18.854 28.545c-2.198 1.15-4.263 2.544-6.159 4.155l-18.854-28.545zm26.524 84.197-9.787 16.934c-1.06 1.728-3.271 2.321-5.014 1.343-0.835-0.491-1.439-1.299-1.679-2.246-0.239-0.948-0.095-1.957 0.402-2.804l9.765-16.888c1.96 1.462 4.078 2.695 6.315 3.677l-2e-3 -0.016zm-22.416 35.267c-4.022-1.46-6.802-5.169-7.111-9.486-0.309-4.316 1.911-8.443 5.678-10.554-0.014 3.921 2.032 7.533 5.374 9.492 0.547 0.311 1.119 0.577 1.709 0.795 2.984 1.097 6.307 0.821 9.101-0.757 0.047 3.636-1.697 7.077-4.653 9.183-2.957 2.107-6.741 2.604-10.098 1.327zm26.893-41.379c-9.929-3.597-16.575-13.021-16.721-23.708s6.239-20.431 16.062-24.515c9.824-4.083 21.059-1.663 28.265 6.089-5.663 2.005-8.752 8.193-6.957 13.936 1.008 3.234 3.451 5.796 6.612 6.934 2.26 0.817 4.73 0.864 7.035 0.134-1.022 7.807-5.509 14.754-12.188 18.869s-14.819 4.947-22.108 2.261zm32.232-28.18c-1.915 0.584-3.933-0.429-4.612-2.316-0.616-1.935 0.431-4.026 2.348-4.688l22.89-7.63c0.264 2.479 1.025 4.874 2.237 7.037l-22.863 7.597zm34.889-6.344c-5.675-2.078-8.557-8.427-6.439-14.181 2.118-5.753 8.435-8.732 14.109-6.654 5.674 2.079 8.557 8.428 6.439 14.181-2.118 5.754-8.435 8.733-14.109 6.654z' fill='#F2F2F2'/><path d='m245.32 131.65c-2.749-6.338-9.653-9.852-16.536-8.416l-12.905-7.255c0.08-3.586-0.612-7.139-2.03-10.425-1.744-4.032-4.543-7.5263-8.113-10.128l4.034-16.184c6.407-4.4353 8.293-12.968 4.315-19.52-3.978-6.5522-12.459-8.8837-19.403-5.3339-6.944 3.5497-9.976 11.767-6.937 18.799 0.144 0.3342 0.367 0.6347 0.535 0.9586l-4.239 16.934c-1.415 0.3258-2.801 0.7717-4.141 1.3329-9.307 3.9583-15.498 12.862-15.863 22.814-0.366 9.951 5.162 19.136 14.162 23.534 9 4.397 19.833 3.205 27.755-3.054l11.791 6.612c0.12 0.345 0.186 0.713 0.331 1.047 3.191 7.382 11.876 10.744 19.399 7.509s11.035-11.843 7.845-19.225zm-46.842-71.004c3.761-1.6177 8.104 0.0633 9.699 3.7546 1.596 3.6913-0.16 7.995-3.922 9.6127-3.761 1.6176-8.104-0.0634-9.699-3.7546-1.596-3.6913 0.16-7.9951 3.922-9.6127zm3.039 21.282-3.662 14.653c-0.49 1.9618-2.495 3.179-4.479 2.7186-1.983-0.4603-3.193-2.4238-2.703-4.3856l3.685-14.73c2.192 1.1703 4.655 1.7704 7.159 1.7443zm-28.534 41.2c-3.975-9.228 0.411-19.978 9.806-24.031 0.269-0.1157 0.538-0.184 0.805-0.2867 0.12 0.446 0.269 0.8837 0.445 1.3101 1.252 2.913 3.732 5.131 6.795 6.077 3.064 0.946 6.409 0.528 9.167-1.147 1.073-0.668 2.026-1.51 2.818-2.488 1.805 1.663 3.241 3.679 4.219 5.921 3.988 9.228-0.402 19.988-9.806 24.032s-20.26-0.159-24.249-9.387zm38.193 7.076c1.42-2.019 2.542-4.224 3.332-6.549l6.656 3.74c-1.737 1.791-2.991 3.981-3.645 6.366l-6.343-3.557zm13.711 10.233c-1.596-3.691 0.16-7.995 3.922-9.613 3.762-1.617 8.104 0.064 9.7 3.755 1.595 3.691-0.161 7.995-3.923 9.613-1.806 0.776-3.843 0.817-5.662 0.113s-3.271-2.096-4.037-3.868z' fill='#F2F2F2'/><path d='m68.054 165.04c-4.568-6.154-13.214-7.668-19.78-3.462-6.5659 4.205-8.8065 12.691-5.1259 19.414 3.6805 6.723 12.024 9.383 19.087 6.086l14.224 4.126c0.7424 3.51 2.2291 6.812 4.3621 9.688 2.6207 3.529 6.1449 6.293 10.216 8.013l-0.2248 16.675c-5.2225 5.777-5.1065 14.514 0.2655 19.987 5.3719 5.474 14.162 5.813 20.111 0.776s7.021-13.728 2.453-19.882c-0.217-0.293-0.503-0.534-0.741-0.812l0.259-17.443c1.302-0.642 2.547-1.395 3.72-2.249 8.156-5.973 12.147-16.051 10.225-25.823-1.921-9.772-9.404-17.456-19.173-19.689-9.7686-2.232-20.043 1.395-26.324 9.292l-12.993-3.753c-0.1962-0.308-0.3447-0.651-0.5618-0.944zm-17.883 13.207c-2.3979-3.23-1.6729-7.82 1.6192-10.252 3.2922-2.431 7.9049-1.783 10.303 1.448 2.3979 3.23 1.6729 7.82-1.6192 10.252-3.2922 2.431-7.9049 1.783-10.303-1.448zm55.891 62.868c-3.292 2.431-7.9051 1.784-10.303-1.447-2.3978-3.231-1.6729-7.821 1.6193-10.252 3.2917-2.431 7.9047-1.783 10.303 1.447 2.398 3.231 1.673 7.821-1.619 10.252zm-7.8181-20.013 0.202-15.115c0.0285-2.021 1.7021-3.663 3.7381-3.666 2.037-4e-3 3.664 1.633 3.636 3.654l-0.216 15.183c-2.399-0.635-4.931-0.654-7.3601-0.056zm18.343-46.624c5.982 8.08 4.171 19.544-4.048 25.629-0.245 0.181-0.497 0.313-0.744 0.478-1.941-3.592-5.77-5.762-9.901-5.612-4.1316 0.15-7.863 2.594-9.6495 6.321-2.1386-1.209-3.9977-2.844-5.4625-4.805-5.9947-8.076-4.1822-19.551 4.0481-25.629 8.2304-6.079 19.762-4.459 25.757 3.618zm-38.804 1.806c-0.9204 2.289-1.5082 4.691-1.7456 7.135l-7.3314-2.107c1.2825-2.145 2.0007-4.57 2.0873-7.047l6.9897 2.019z' fill='#F2F2F2'/></svg>";
document.body.appendChild(chemButton);

var chemSideBar = document.createElement('div');
chemSideBar.setAttribute('style', 'padding-top: 50px; height: 100vh; overflow-y: scroll; position: fixed; right: 0; top: 0; z-index: 10000; background:white; width: 30%; box-shadow: 2px 0 4px rgba(0,0,0,0.5); transition: width .35s; display: none')
chemSideBar.setAttribute("id", "chem_sidebar")

var template = `
<div style="float: left; margin-top: 5px; margin-left: 10px; border: none; height: 50px; padding: 0px 5px; align-items: center; color: white; text-decoration: none; cursor: pointer;">
<svg height='45px' width='45px' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><path d='m300 150c0 82.843-67.157 150-150 150-82.843 0-150-67.157-150-150 0-82.843 67.157-150 150-150 82.843 0 150 67.157 150 150z' fill='#F2F2F2'/><path d='m135.71 22.712-89.694 51.557c-8.6716 4.9677-14.018 14.182-14.015 24.157v103.11c-0.0725 9.906 5.1363 19.105 13.679 24.157l89.695 51.557c8.672 4.995 19.357 4.995 28.029 0l89.694-51.557c8.612-5.013 13.905-14.211 13.902-24.157v-103.11c0.073-9.8771-5.083-19.06-13.566-24.157l-89.694-51.557c-8.684-4.9488-19.344-4.9488-28.029 0z' fill='#D00000'/><path d='m245.32 156.66c-9.457-3.451-19.976 1.51-23.515 11.09-0.044 0.118-0.053 0.237-0.094 0.36l-18.602 6.19c-7.939-10.511-21.376-15.149-34.138-11.784l-20.691-31.326c9.239-12.436 8.785-29.587-1.094-41.302l8.901-15.395c7.798-0.9937 14.146-6.9069 15.762-14.683s-1.862-15.672-8.636-19.605c-6.774-3.934-15.326-3.0245-21.235 2.2583s-7.85 13.755-4.821 21.037l-8.873 15.35c-9.46-1.7718-19.256 0.7546-26.79 6.9088-7.5341 6.1542-12.044 15.314-12.332 25.048l-18.626 6.182c-1.2698-0.919-2.6546-1.664-4.1192-2.219-6.9257-2.537-14.727-0.594-19.766 4.923-5.0389 5.517-6.3232 13.522-3.2541 20.281 3.0692 6.76 9.8873 10.943 17.275 10.6 7.3879-0.344 13.891-5.146 16.476-12.169 0.0434-0.118 0.0522-0.237 0.0935-0.36l18.602-6.19c7.9382 10.511 21.376 15.149 34.138 11.784l20.69 31.326c-9.239 12.437-8.784 29.587 1.095 41.302l-8.901 15.395c-7.799 0.994-14.146 6.907-15.762 14.683s1.862 15.671 8.636 19.605 15.326 3.025 21.234-2.258c5.909-5.283 7.851-13.755 4.821-21.037l8.873-15.35c9.46 1.772 19.257-0.754 26.791-6.908 7.534-6.155 12.043-15.314 12.331-25.049l18.627-6.181c1.269 0.918 2.654 1.664 4.119 2.218 9.457 3.464 19.985-1.501 23.515-11.09s-1.274-20.17-10.731-23.635zm-109.86-75.597 9.787-16.934c1.032-1.7657 3.277-2.3671 5.014-1.3433 1.738 1.0238 2.309 3.2852 1.277 5.0509l-9.765 16.887c-1.96-1.4556-4.078-2.6833-6.313-3.6602zm22.418-35.251c4.022 1.46 6.802 5.1689 7.111 9.4853 0.308 4.3164-1.912 8.4433-5.678 10.554 0.025-3.9101-2.011-7.5164-5.345-9.4682s-7.463-1.9546-10.84-0.0073c-0.066-3.6451 1.67-7.1031 4.63-9.2227s6.755-2.6226 10.122-1.3414zm-101.68 96.737c-5.6741-2.079-8.5569-8.427-6.4388-14.181 2.1181-5.753 8.435-8.732 14.109-6.654 5.6742 2.079 8.557 8.428 6.4389 14.181s-8.435 8.733-14.109 6.654zm19.696-19.582 22.885-7.605c1.914-0.638 3.962 0.398 4.587 2.319 0.615 1.937-0.434 4.03-2.352 4.691l-22.884 7.633c-0.2638-2.48-1.0246-4.875-2.2361-7.038zm27.49 6.354c4.181-1.466 7.111-5.311 7.438-9.757 0.326-4.447-2.015-8.63-5.942-10.617-2.529-1.289-5.469-1.517-8.1853-0.634 1.4556-10.897 9.5603-19.748 20.21-22.071 10.65-2.3227 21.52 2.3904 27.104 11.752 5.583 9.3625 4.663 21.328-2.297 29.84-6.959 8.511-18.437 11.707-28.621 7.971-3.699-1.362-7.023-3.585-9.707-6.484zm33.595 11.557c2.198-1.15 4.264-2.544 6.159-4.155l18.854 28.545c-2.198 1.15-4.263 2.544-6.159 4.155l-18.854-28.545zm26.524 84.197-9.787 16.934c-1.06 1.728-3.271 2.321-5.014 1.343-0.835-0.491-1.439-1.299-1.679-2.246-0.239-0.948-0.095-1.957 0.402-2.804l9.765-16.888c1.96 1.462 4.078 2.695 6.315 3.677l-2e-3 -0.016zm-22.416 35.267c-4.022-1.46-6.802-5.169-7.111-9.486-0.309-4.316 1.911-8.443 5.678-10.554-0.014 3.921 2.032 7.533 5.374 9.492 0.547 0.311 1.119 0.577 1.709 0.795 2.984 1.097 6.307 0.821 9.101-0.757 0.047 3.636-1.697 7.077-4.653 9.183-2.957 2.107-6.741 2.604-10.098 1.327zm26.893-41.379c-9.929-3.597-16.575-13.021-16.721-23.708s6.239-20.431 16.062-24.515c9.824-4.083 21.059-1.663 28.265 6.089-5.663 2.005-8.752 8.193-6.957 13.936 1.008 3.234 3.451 5.796 6.612 6.934 2.26 0.817 4.73 0.864 7.035 0.134-1.022 7.807-5.509 14.754-12.188 18.869s-14.819 4.947-22.108 2.261zm32.232-28.18c-1.915 0.584-3.933-0.429-4.612-2.316-0.616-1.935 0.431-4.026 2.348-4.688l22.89-7.63c0.264 2.479 1.025 4.874 2.237 7.037l-22.863 7.597zm34.889-6.344c-5.675-2.078-8.557-8.427-6.439-14.181 2.118-5.753 8.435-8.732 14.109-6.654 5.674 2.079 8.557 8.428 6.439 14.181-2.118 5.754-8.435 8.733-14.109 6.654z' fill='#F2F2F2'/><path d='m245.32 131.65c-2.749-6.338-9.653-9.852-16.536-8.416l-12.905-7.255c0.08-3.586-0.612-7.139-2.03-10.425-1.744-4.032-4.543-7.5263-8.113-10.128l4.034-16.184c6.407-4.4353 8.293-12.968 4.315-19.52-3.978-6.5522-12.459-8.8837-19.403-5.3339-6.944 3.5497-9.976 11.767-6.937 18.799 0.144 0.3342 0.367 0.6347 0.535 0.9586l-4.239 16.934c-1.415 0.3258-2.801 0.7717-4.141 1.3329-9.307 3.9583-15.498 12.862-15.863 22.814-0.366 9.951 5.162 19.136 14.162 23.534 9 4.397 19.833 3.205 27.755-3.054l11.791 6.612c0.12 0.345 0.186 0.713 0.331 1.047 3.191 7.382 11.876 10.744 19.399 7.509s11.035-11.843 7.845-19.225zm-46.842-71.004c3.761-1.6177 8.104 0.0633 9.699 3.7546 1.596 3.6913-0.16 7.995-3.922 9.6127-3.761 1.6176-8.104-0.0634-9.699-3.7546-1.596-3.6913 0.16-7.9951 3.922-9.6127zm3.039 21.282-3.662 14.653c-0.49 1.9618-2.495 3.179-4.479 2.7186-1.983-0.4603-3.193-2.4238-2.703-4.3856l3.685-14.73c2.192 1.1703 4.655 1.7704 7.159 1.7443zm-28.534 41.2c-3.975-9.228 0.411-19.978 9.806-24.031 0.269-0.1157 0.538-0.184 0.805-0.2867 0.12 0.446 0.269 0.8837 0.445 1.3101 1.252 2.913 3.732 5.131 6.795 6.077 3.064 0.946 6.409 0.528 9.167-1.147 1.073-0.668 2.026-1.51 2.818-2.488 1.805 1.663 3.241 3.679 4.219 5.921 3.988 9.228-0.402 19.988-9.806 24.032s-20.26-0.159-24.249-9.387zm38.193 7.076c1.42-2.019 2.542-4.224 3.332-6.549l6.656 3.74c-1.737 1.791-2.991 3.981-3.645 6.366l-6.343-3.557zm13.711 10.233c-1.596-3.691 0.16-7.995 3.922-9.613 3.762-1.617 8.104 0.064 9.7 3.755 1.595 3.691-0.161 7.995-3.923 9.613-1.806 0.776-3.843 0.817-5.662 0.113s-3.271-2.096-4.037-3.868z' fill='#F2F2F2'/><path d='m68.054 165.04c-4.568-6.154-13.214-7.668-19.78-3.462-6.5659 4.205-8.8065 12.691-5.1259 19.414 3.6805 6.723 12.024 9.383 19.087 6.086l14.224 4.126c0.7424 3.51 2.2291 6.812 4.3621 9.688 2.6207 3.529 6.1449 6.293 10.216 8.013l-0.2248 16.675c-5.2225 5.777-5.1065 14.514 0.2655 19.987 5.3719 5.474 14.162 5.813 20.111 0.776s7.021-13.728 2.453-19.882c-0.217-0.293-0.503-0.534-0.741-0.812l0.259-17.443c1.302-0.642 2.547-1.395 3.72-2.249 8.156-5.973 12.147-16.051 10.225-25.823-1.921-9.772-9.404-17.456-19.173-19.689-9.7686-2.232-20.043 1.395-26.324 9.292l-12.993-3.753c-0.1962-0.308-0.3447-0.651-0.5618-0.944zm-17.883 13.207c-2.3979-3.23-1.6729-7.82 1.6192-10.252 3.2922-2.431 7.9049-1.783 10.303 1.448 2.3979 3.23 1.6729 7.82-1.6192 10.252-3.2922 2.431-7.9049 1.783-10.303-1.448zm55.891 62.868c-3.292 2.431-7.9051 1.784-10.303-1.447-2.3978-3.231-1.6729-7.821 1.6193-10.252 3.2917-2.431 7.9047-1.783 10.303 1.447 2.398 3.231 1.673 7.821-1.619 10.252zm-7.8181-20.013 0.202-15.115c0.0285-2.021 1.7021-3.663 3.7381-3.666 2.037-4e-3 3.664 1.633 3.636 3.654l-0.216 15.183c-2.399-0.635-4.931-0.654-7.3601-0.056zm18.343-46.624c5.982 8.08 4.171 19.544-4.048 25.629-0.245 0.181-0.497 0.313-0.744 0.478-1.941-3.592-5.77-5.762-9.901-5.612-4.1316 0.15-7.863 2.594-9.6495 6.321-2.1386-1.209-3.9977-2.844-5.4625-4.805-5.9947-8.076-4.1822-19.551 4.0481-25.629 8.2304-6.079 19.762-4.459 25.757 3.618zm-38.804 1.806c-0.9204 2.289-1.5082 4.691-1.7456 7.135l-7.3314-2.107c1.2825-2.145 2.0007-4.57 2.0873-7.047l6.9897 2.019z' fill='#F2F2F2'/></svg>
</div>
<div id="chem_sidebar_closer" style="float: right; border: none; padding: 5px 5px; cursor: pointer;">
<svg height='1.5rem' width='1.5rem' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'><path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12'></path></svg></div>
`

var chemSideBarHeader = document.createElement('div');
chemSideBarHeader.setAttribute('style', 'margin-top: -50px; position: fixed; width: 30%; background-color: white; border-bottom: 1px solid #d6d6d6')
chemSideBarHeader.innerHTML = template;
chemSideBar.appendChild(chemSideBarHeader);

// var chemSideBarCloser = document.createElement('div');
// chemSideBarCloser.setAttribute("id", "")
// chemSideBarCloser.setAttribute('style', '')
// chemSideBarCloser.innerHTML = "";
// chemSideBar.appendChild(chemSideBarCloser);

document.body.appendChild(chemSideBar);

chemButton.addEventListener("click", () => {
    let chem_sidebar = document.getElementById("chem_sidebar")
    chem_sidebar.querySelectorAll('img').forEach(_img => {
      _img.parentElement ? _img.parentElement.remove() : null;
    });
    let i = 0
    document.querySelectorAll('img').forEach(element => {
      if(element.offsetHeight > 100){
        let _element = element.cloneNode(true);
        var imageWrapper = document.createElement('div');
        _element.setAttribute('style', 'cursor:pointer; border-radius: 10px; border: 1px solid #d6d6d6; width: calc(100% - 40px); height: auto; margin: 20px 20px  0 20px; padding: 10px')
        imageWrapper.setAttribute("id", "chem_instance_" + i)
        // _element.addEventListener("click", OSR(i, _element.src), false);
        let data = {
          id: i, 
          src: [{ 'src': _element.src}],
          created_at: new Date().toISOString(),
          url: window.location.href,
          reference: uuidv4(),
          title: document.title,
          favicon: getFavicon()
        }
        _element.addEventListener("click", openWorkSpace(data), false);
        imageWrapper.appendChild(_element)
        chemSideBar.appendChild(imageWrapper)
      }
      i = i+1
    });
    chem_sidebar.style.display = chem_sidebar.style.display === 'none' ? '' : 'none';
})

document.getElementById('chem_sidebar_closer').addEventListener("click", () => {
  let chem_sidebar = document.getElementById("chem_sidebar")
  chem_sidebar.style.display = chem_sidebar.style.display === 'none' ? '' : 'none';
})

function getFavicon(){
  var favicon = undefined;
  var nodeList = document.getElementsByTagName("link");
  for (var i = 0; i < nodeList.length; i++)
  {
      if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
      {
          favicon = nodeList[i].getAttribute("href");
      }
  }
  return favicon;        
}

function openWorkSpace(data){
  return function(){
    let info = {}
    info['action'] = "open_workspace";
    info['data'] = data;
    chrome.runtime.sendMessage(info, () => {});
  }
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

// function OSR(i, c) {
//   return function(){
//     let extractedDataDiv = document.createElement('div');
//     extractedDataDiv.setAttribute('style', 'overflow: auto; text-align: center; padding: 0 20px; border-bottom: 1px solid #d6d6d6; padding-bottom: 20px;')
//     let imgWrapperDiv = document.getElementById("chem_instance_" + i)
//     imgWrapperDiv.appendChild(extractedDataDiv)
//     extractedDataDiv.innerHTML=`<svg height="50" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
//     viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
//     <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
//       <animate
//         attributeName="opacity"
//         dur="1s"
//         values="0;1;0"
//         repeatCount="indefinite"
//         begin="0.1"/>    
//     </circle>
//     <circle fill="#000" stroke="none" cx="26" cy="50" r="6">
//       <animate
//         attributeName="opacity"
//         dur="1s"
//         values="0;1;0"
//         repeatCount="indefinite" 
//         begin="0.2"/>       
//     </circle>
//     <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
//       <animate
//         attributeName="opacity"
//         dur="1s"
//         values="0;1;0"
//         repeatCount="indefinite" 
//         begin="0.3"/>     
//     </circle>
//   </svg>
//   `
//     toDataURL(c, function(imgDataURL){
//       if(imgDataURL){
//         axios.post("https://api.naturalproducts.net/decimer/process", {
//             "reference" : "chem_instance_" + i,
//             "path": c,
//             "img" : imgDataURL
//         }).then(response => {
//           extractedDataDiv.innerHTML=""
//           let smiles = [...new Set(response.data.smiles)].filter(n => n);
//           smiles.forEach(s => {
//             let smilesDiv = document.createElement('div');

//             smilesDiv.innerHTML = '<img width="100%" src="https://api.naturalproducts.net/chem/depict?smiles='+s+'" />'
//             smilesDiv.setAttribute('title', s)
//             smilesDiv.setAttribute('style', 'width: 22%; padding: 0 1%; margin: 4px; float: left; border: 1px solid #d6d6d6; border-radius: 5px;')
//             extractedDataDiv.appendChild(smilesDiv)
//           })
//         })
//       }else{
//         axios.post("https://api.naturalproducts.net/decimer/process", {
//             "reference" : "chem_instance_" + i,
//             "path": c
//         }).then(response => {
//           extractedDataDiv.innerHTML=""
//           let smiles = [...new Set(response.data.smiles)].filter(n => n);
//           smiles.forEach(s => {
//             let smilesDiv = document.createElement('div');

//             smilesDiv.innerHTML = '<img width="100%" src="https://api.naturalproducts.net/chem/depict?smiles='+s+'" />'
//             smilesDiv.setAttribute('title', s)
//             smilesDiv.setAttribute('style', 'width: 22%; padding: 0 1%; margin: 4px; float: left; border: 1px solid #d6d6d6; border-radius: 5px;')
//             extractedDataDiv.appendChild(smilesDiv)
//           })
//         })
//       }
//     })
//   }
// }

// function toDataURL(url, callback){
//   var xhr = new XMLHttpRequest();
//   xhr.open('get', url);
//   xhr.responseType = 'blob';
//   xhr.onload = function(){
//     var fr = new FileReader();
  
//     fr.onload = function(){
//       callback(this.result);
//     };
  
//     fr.readAsDataURL(xhr.response); // async call
//   };
//   xhr.onerror = function() { callback(this.result); };
//   xhr.send();
// }

// function insertAfter(referenceNode, newNode) {
//   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

const injectCSS = css => {
  let el = document.createElement('style');
  el.setAttribute('type', 'text/css');
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

injectCSS(`#chem_sidebar{ border-left: 1px solid #d6d6d6; }#chem_icon:hover{ box-shadow: 0 0 0.5px rgb(0 0 0 / 70%), 0 2px 8px rgb(26 33 52 / 20%) }`);
