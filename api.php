<?php
header('Content-Type: application/json');

$db = new PDO('mysql:host=localhost;dbname=clasificados', 'root', '');


if (isset($_GET['accion'])) {
    //si accion = listar, entonces listar todas las tiendas
    if ($_GET['accion'] == 'listar') {
        $sql = "SELECT * FROM tiendas";
        $resultado = $db->query($sql);
        $tiendas = $resultado->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($tiendas);
    }
    //si accion = articulos, entonces listar los articulos de una tienda
     if ($_GET['accion'] == 'articulos') {

       $id=$_GET['id'];
        $page = $_GET['page'];
        echo json_encode(paginar($page,$db,$id));


    }
    //si accion=listarportada, entonces listar 3 articulos de cada tienda
    if ($_GET['accion'] == 'listarportada') {
        $sql = "SELECT * FROM tiendas";
        $resultado = $db->query($sql);
        $tiendas = $resultado->fetchAll(PDO::FETCH_ASSOC);

        $articulos = array();
        foreach ($tiendas as $tienda) {
            $sql = "SELECT * FROM articulos WHERE tienda_id = $tienda[id] LIMIT 3";
            $resultado = $db->query($sql);
            $articulos[] = $resultado->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($articulos);
    }


}


function paginar($pagina,$db,$id){
  
    #Inicializamos el tamaño de la pagina
    $tamaño_pagina = 3;
    #Iniciamos en donde iniciara la pagina
    
    $empezar_desde = ($pagina - 1) * $tamaño_pagina;
    #Inicializamos el array de datos que devolvera la paginación
   

    $query = "SELECT * FROM articulos where id_tienda=1";
    $stmt1 = $db->prepare($query);
    $stmt1->execute(array());
    $num_filas = $stmt1->rowCount();
    $total_paginas = (int) ceil($num_filas / $tamaño_pagina);
    


    $sql = "SELECT * FROM articulos where id_tienda=$id LIMIT $empezar_desde, $tamaño_pagina ";
    $resultado = $db->query($sql);
  
    $articulos = $resultado->fetchAll(PDO::FETCH_ASSOC);
    
   
    $respuesta = array(
        "datos" => $articulos,
        "paginacion" => array(
            "num_reg" => $num_filas,
            "mostramos_reg" => $tamaño_pagina,
            "mostrando" => $pagina,
            "total_paginas" => $total_paginas,
            "pagina_anterior" => ($pagina - 1)<=0?1:($pagina - 1),
            "pagina_siguiente" => ($pagina + 1)>$total_paginas?$total_paginas:($pagina + 1),

        )
    );

return $respuesta;

}


?>