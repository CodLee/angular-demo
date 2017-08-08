$callBack = isset($_GET['callback']) ? $_GET['callback'] : DEFAULT_CALLBACK;
exit($callBack.'('.json_encode($data).')');