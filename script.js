    document.addEventListener("DOMContentLoaded", function () {
        var languageSelect = document.getElementById("languageSelect");
        languageSelect.addEventListener("change", function () {

        var selectedLanguage = languageSelect.value;
        

        if (selectedLanguage === "en") {
            document.getElementById("userDataButton").innerText = "Get User Data";
            document.getElementById("productDataButton").innerText = "Get Product Data";
            document.getElementById("sortByNameButton").innerText = "Sort By Name";
            apiExampleHeading.innerText ="API Example";
            document.title= "API Example";
        } else if (selectedLanguage === "tr") {
            
            document.getElementById("userDataButton").innerText = "Kullanıcı Verilerini Al";
            document.getElementById("productDataButton").innerText = "Ürün Verilerini Al";
            document.getElementById("sortByNameButton").innerText = "İsime Göre Sırala";
            apiExampleHeading.innerText ="API Örneği"
            document.title ="API Örneği"
        } else if (selectedLanguage === "es") {
            document.getElementById("userDataButton").innerText = "Obtener Datos de Usuario";
            document.getElementById("productDataButton").innerText = "Obtener Datos del Producto";
            document.getElementById("sortByNameButton").innerText = "Ordenar Por Pombre";
            apiExampleHeading.innerText = "Ejemplo de API";
            document.title="Ejemplo de API";
        } else if (selectedLanguage === "fr") {
            document.getElementById("userDataButton").innerText = "Obtenir les données utilisateur";
            document.getElementById("productDataButton").innerText = "Obtenir les données produit";
            document.getElementById("sortByNameButton").innerText = "Trier par nom";
            apiExampleHeading.innerText = "Exemple d'API";
            document.title="Exemple d'API";
        } else if (selectedLanguage === "ch") {
            document.getElementById("userDataButton").innerText = "获取用户数据";
            document.getElementById("productDataButton").innerText = "获取产品数据";
            document.getElementById("sortByNameButton").innerText = "按名称分类";
            apiExampleHeading.innerText = "API 示例";
            document.title= "API 示例";
        }
        });
    });

    document.getElementById("userDataButton").addEventListener("click", function () {
        var parameters = this.getAttribute("data-parameters").split(",");
        fetchAndRenderData("https://api.escuelajs.co/api/v1/users", parameters);
    });

    document.getElementById("productDataButton").addEventListener("click", function () {
        var parameters = this.getAttribute("data-parameters").split(",");
        fetchAndRenderData("https://api.escuelajs.co/api/v1/products", parameters);
    });

    document.getElementById("sortByNameButton").addEventListener("click", function () {
        sortTableByName();
    });


    var languageSelect = document.getElementById("languageSelect");
    languageSelect.addEventListener("change", function () {
        renderTable();
    });

    function fetchAndRenderData(url, parameters) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY4OTEzOTgyNSwiZXhwIjoxNjkwODY3ODI1fQ.PKp818NGeuurMDtkqvfTT2So1iVqvmPC6r-nWhqKXSA");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    renderTable(data, parameters);
                } else {
                    console.error("Error:" + xhr.status);
                }
            }
        };

        xhr.send();
    }
    function renderTable(data, parameters) {
        var tableBody = document.querySelector("#dataGrid tbody");
        var parametersRow = document.querySelector("#parametersRow");
        var filtersRow = document.querySelector("#filtersRow");
        tableBody.innerHTML = "";
        parametersRow.innerHTML = "";
        filtersRow.innerHTML = "";
    
        parameters.forEach(function (parameter) {
        var th = document.createElement("th");
        th.textContent = getTranslation(parameter);
        parametersRow.appendChild(th);
    
        var td = document.createElement("td");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", parameter);
        input.setAttribute("placeholder", getTranslation("filterPlaceholder"));
        td.appendChild(input);
        filtersRow.appendChild(td);
    
        input.addEventListener("input", function () {
            filterTable(data, parameters);
        });
        });
    
    
    
        data.forEach(function (item) {
            var row = document.createElement("tr");
            parameters.forEach(function (parameter) {
                var td = document.createElement("td");
                if (parameter.toLowerCase() === "avatar") {
                    var img = document.createElement("img");
                    img.src = item[parameter];
                    img.style.maxWidth = "100px";
                    td.appendChild(img);
                } else if (parameter.toLowerCase() === "name") {
                    td.textContent = getFullName(item.name.firstname, item.name.lastname); 
                } else {
                    td.textContent = item[parameter.toLowerCase()] || item[parameter];
                }
                row.appendChild(td);
            });
            tableBody.appendChild(row);
        });
    }
    
        function filterTable(data, parameters) {
        var rows = document.querySelectorAll("#dataGrid tbody tr");
        var filterInputs = document.querySelectorAll("#filtersRow input");
    
        rows.forEach(function (row) {
            var cells = row.querySelectorAll("td");
            var showRow = true;
    
            cells.forEach(function (cell, index) {
            var parameter = parameters[index];
            var input = filterInputs[index];
            var value = cell.textContent || cell.innerText;
    
            if (input.value !== "" && !value.toLowerCase().includes(input.value.toLowerCase())) {
                showRow = false;
            }
            });
    
            if (showRow) {
            row.style.display = "";
            } else {
            row.style.display = "none";
            }
        });
        }

    function sortTableByName() {
        var table = document.querySelector("#dataGrid");
        var rows = Array.from(table.querySelectorAll("tbody tr"));

        rows.sort(function (a, b) {
            var nameA = a.querySelector("td:nth-child(2)").textContent.toLowerCase();
            var nameB = b.querySelector("td:nth-child(2)").textContent.toLowerCase();

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        });

        rows.forEach(function (row) {
            table.querySelector("tbody").appendChild(row);
        });
    }

    function getFullName(firstName, lastName) {
        return firstName + " " + lastName;
    }