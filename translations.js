var translations = {
    en: {
        id: "ID",
        name: "Name",
        email: "E-mail",
        password: "Password",
        role: "Role",
        avatar: "Avatar",
        creationAt: "Creation Date",
        updatedAt: "Updated Date",
        title: "Title",
        description: "Description",
        price: "Price",
        apiExampleTitle:"Api Example",
        filterPlaceholder: "Filter...",
        filterButton: "Filter",
        userDataButton: "Get User Data",
        productDataButton: "Get Product Data",
        sortByNameButton: "Sort by Name",
   
    },
    tr: {
        id: "Kimlik",
        name: "İsim",
        email: "E-posta",
        password: "Parola",
        role: "Rol",
        avatar: "Profil Resmi",
        creationAt: "Oluşturma Tarihi",
        updatedAt: "Güncelleme Tarihi",
        title: "Başlık",
        description: "Tanım",
        price: "Fiyat",
        apiExampleTitle:"Api Örneği",
        filterPlaceholder: "Filtrele...",
        filterButton: "Filtrele",
        userDataButton: "Kullanıcı Verilerini Al",
        productDataButton: "Ürün Verilerini Al",
        sortByNameButton: "İsme Göre Sırala"
        
    },
    es: {
        id: "ID",
        name: "Nombre",
        email: "E-mail",
        password: "Contraseña",
        role: "Rol",
        avatar: "Avatar",
        creationAt: "Fecha de Creación",
        updatedAt: "Fecha de Actualización",
        title: "Título",
        description: "Descripción",
        price: "Precio",
        apiExampleTitle:"Ejemplo de API",
        filterPlaceholder: "Filtrar...",
        filterButton: "Filtrar",
        userDataButton: "Obtener Datos de Usuario",
        productDataButton: "Obtener Datos de Producto",
        sortByNameButton: "Ordenar por Nombre"
    },
    fr: {
        id: "Identifiant",
        name: "Nom",
        email: "E-mail",
        password: "Mot De Passe",
        role: "Rôle",
        avatar: "Avatar",
        creationAt: "Date De Création",
        updatedAt: "Date De Mise à Jour ",
        title: "Titre",
        description: "Descripción",
        price: "Prix",
        apiExampleTitle:"Exemple d'API",
        filterPlaceholder: "Filtrer...",
        filterButton: "Filtrer",
        userDataButton: "Obtenir les données utilisateur",
        productDataButton: "Obtenir les données produit",
        sortByNameButton: "Trier par nom"
    },
    ch: {
        id: "护照",
        name: "姓名",
        email: "电子邮件",
        password: "密码",
        role: "角色",
        avatar: "头像",
        creationAt: "创建日期",
        updatedAt: "更新日期",
        title: "标题",
        description: "描述",
        price: "价格",
        apiExampleTitle:"API示例",
        filterPlaceholder: "筛选",
        filterButton: "筛选",
        userDataButton: "获取用户数据",
        productDataButton: "获取产品数据",
        sortByNameButton: "按名称排序"
    }
};

function getTranslation(key) {
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;

    if (translations[selectedLanguage]) {
        return translations[selectedLanguage][key] || key;
    } else {
        return key;
    }
}
