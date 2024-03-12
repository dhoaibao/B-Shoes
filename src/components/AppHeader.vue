<template>
  <header>
    <div class="logo">
      <router-link to="/" style="color: black" class="router-link">B-SHOES</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/featured">Nổi bật</router-link></li>
        <li><router-link to="/men">Nam</router-link></li>
        <li><router-link to="/women">Nữ</router-link></li>
        <li><router-link to="/kids">Trẻ em</router-link></li>
      </ul>
    </nav>
    <div class="search-box">
      <input type="text" placeholder="Tìm kiếm..." >
      <button><i class="fa fa-search"></i></button>
    </div>
    <div class="icon-box">
      <router-link to="/cart"><i class="fa fa-shopping-cart"></i></router-link>
      <router-link to="/login"><i class="fa-solid fa-right-to-bracket"></i></router-link>
    </div>
  </header>
</template>


