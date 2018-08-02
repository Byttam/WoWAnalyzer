import React from 'react';

// Viral Content by Edwin Prayogi M from the Noun Project
const Icon = ({ ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...other}>
    <g>
      <path d="M49.9931641,18.8754883c0.6904297,0,1.25-0.5595703,1.25-1.25V12.5c0-0.6904297-0.5595703-1.25-1.25-1.25   s-1.25,0.5595703-1.25,1.25v5.1254883C48.7431641,18.315918,49.3027344,18.8754883,49.9931641,18.8754883z" />
      <path d="M32.7236328,22.5913086c0.2324219,0.4008789,0.6523438,0.625,1.0839844,0.625   c0.2119141,0,0.4267578-0.0537109,0.6240234-0.1674805c0.5976563-0.3452148,0.8027344-1.109375,0.4580078-1.7075195   l-2.5625-4.4389648c-0.3466797-0.5976563-1.109375-0.8037109-1.7080078-0.4575195   c-0.5976563,0.3452148-0.8027344,1.109375-0.4580078,1.7075195L32.7236328,22.5913086z" />
      <path d="M16.8955078,32.3383789l4.4394531,2.5629883c0.1972656,0.1137695,0.4121094,0.1674805,0.6240234,0.1674805   c0.4316406,0,0.8515625-0.2241211,1.0839844-0.625c0.3447266-0.5976563,0.1396484-1.3623047-0.4580078-1.7075195   l-4.4394531-2.5629883c-0.5996094-0.3447266-1.3613281-0.1401367-1.7080078,0.4575195   C16.0927734,31.2285156,16.2978516,31.9931641,16.8955078,32.3383789z" />
      <path d="M18.8759766,50.0068359c0-0.6904297-0.5595703-1.25-1.25-1.25H12.5c-0.6904297,0-1.25,0.5595703-1.25,1.25   s0.5595703,1.25,1.25,1.25h5.1259766C18.3164063,51.2568359,18.8759766,50.6972656,18.8759766,50.0068359z" />
      <path d="M21.3417969,65.1103516l-4.4394531,2.5629883c-0.5976563,0.3452148-0.8027344,1.1098633-0.4580078,1.7075195   c0.2324219,0.4008789,0.6523438,0.625,1.0839844,0.625c0.2119141,0,0.4267578-0.0537109,0.6240234-0.1674805l4.4394531-2.5629883   c0.5976563-0.3452148,0.8027344-1.1098633,0.4580078-1.7075195C22.703125,64.9702148,21.9404297,64.7641602,21.3417969,65.1103516z   " />
      <path d="M34.4433594,76.9580078c-0.5996094-0.3457031-1.3613281-0.1396484-1.7080078,0.4575195l-2.5625,4.4389648   c-0.3447266,0.5981445-0.1396484,1.3623047,0.4580078,1.7075195c0.1972656,0.1137695,0.4121094,0.1674805,0.6240234,0.1674805   c0.4316406,0,0.8515625-0.2241211,1.0839844-0.625l2.5625-4.4389648   C35.2460938,78.0673828,35.0410156,77.3032227,34.4433594,76.9580078z" />
      <path d="M50.0068359,81.1245117c-0.6904297,0-1.25,0.5595703-1.25,1.25V87.5c0,0.6904297,0.5595703,1.25,1.25,1.25   s1.25-0.5595703,1.25-1.25v-5.1254883C51.2568359,81.684082,50.6972656,81.1245117,50.0068359,81.1245117z" />
      <path d="M67.2763672,77.4086914c-0.3466797-0.5976563-1.109375-0.8022461-1.7080078-0.4575195   c-0.5976563,0.3452148-0.8027344,1.109375-0.4580078,1.7075195l2.5625,4.4389648   c0.2324219,0.4008789,0.6523438,0.625,1.0839844,0.625c0.2119141,0,0.4267578-0.0537109,0.6240234-0.1674805   c0.5976563-0.3452148,0.8027344-1.109375,0.4580078-1.7075195L67.2763672,77.4086914z" />
      <path d="M83.1044922,67.6616211l-4.4394531-2.5629883c-0.5986328-0.3461914-1.3613281-0.1401367-1.7080078,0.4575195   c-0.3447266,0.5976563-0.1396484,1.3623047,0.4580078,1.7075195l4.4394531,2.5629883   c0.1972656,0.1137695,0.4121094,0.1674805,0.6240234,0.1674805c0.4316406,0,0.8515625-0.2241211,1.0839844-0.625   C83.9072266,68.7714844,83.7021484,68.0068359,83.1044922,67.6616211z" />
      <path d="M87.5,48.7431641h-5.1259766c-0.6904297,0-1.25,0.5595703-1.25,1.25s0.5595703,1.25,1.25,1.25H87.5   c0.6904297,0,1.25-0.5595703,1.25-1.25S88.1904297,48.7431641,87.5,48.7431641z" />
      <path d="M78.0341797,35.0571289c0.2119141,0,0.4267578-0.0537109,0.6240234-0.1674805l4.4394531-2.5629883   c0.5976563-0.3452148,0.8027344-1.1098633,0.4580078-1.7075195c-0.3466797-0.5976563-1.1083984-0.8027344-1.7080078-0.4575195   l-4.4394531,2.5629883c-0.5976563,0.3452148-0.8027344,1.1098633-0.4580078,1.7075195   C77.1826172,34.8330078,77.6025391,35.0571289,78.0341797,35.0571289z" />
      <path d="M65.5566406,23.0419922c0.1972656,0.1137695,0.4121094,0.1674805,0.6240234,0.1674805   c0.4316406,0,0.8515625-0.2241211,1.0839844-0.625l2.5625-4.4389648c0.3447266-0.5981445,0.1396484-1.3623047-0.4580078-1.7075195   c-0.5986328-0.3452148-1.3613281-0.1401367-1.7080078,0.4575195l-2.5625,4.4389648   C64.7539063,21.9326172,64.9589844,22.6967773,65.5566406,23.0419922z" />
      <path d="M56.9118652,26.5949097c-0.1091309-0.0378418-0.2199707-0.0599365-0.335083-0.0667114   c-0.0233154-0.0013428-0.0444336-0.0135498-0.0679932-0.0135498H33.4414063c-0.6904297,0-1.25,0.5595703-1.25,1.25v44.4726563   c0,0.6904297,0.5595703,1.25,1.25,1.25h33.1123047c0.6904297,0,1.25-0.5595703,1.25-1.25V37.8183594   c0-0.0131226-0.0075684-0.0250854-0.0079346-0.038208c-0.00354-0.1530151-0.0336914-0.3015137-0.0917969-0.4432373   c-0.0002441-0.0006714-0.0003662-0.0012817-0.0006104-0.0018921c-0.0617676-0.1498413-0.1418457-0.2926025-0.2609863-0.4116821   l-8.965332-8.9575195l-1.0834961-1.0844727c-0.0028076-0.0028076-0.0068359-0.0037231-0.0096436-0.0064697   c-0.1055908-0.1044922-0.2287598-0.1800537-0.3590088-0.2398682C56.987915,26.618103,56.9504395,26.6081543,56.9118652,26.5949097z    M63.5268555,36.5576172h-5.7719727v-5.7768555L63.5268555,36.5576172z M34.6914063,70.9873047V29.0146484h20.5634766v8.7929688   c0,0.6904297,0.5595703,1.25,1.25,1.25h8.7988281v31.9296875H34.6914063z" />
      <path d="M51.2431641,41.1494141c0-3.9272461-3.1953125-7.1225586-7.1230469-7.1225586   c-3.9267578,0-7.1220703,3.1953125-7.1220703,7.1225586s3.1953125,7.1225586,7.1220703,7.1225586   C48.0478516,48.2719727,51.2431641,45.0766602,51.2431641,41.1494141z M39.4980469,41.1494141   c0-2.5488281,2.0732422-4.6225586,4.6220703-4.6225586s4.6230469,2.0737305,4.6230469,4.6225586   s-2.0742188,4.6225586-4.6230469,4.6225586S39.4980469,43.6982422,39.4980469,41.1494141z" />
      <path d="M59.9033203,45.0673828h-7.5175781c-0.6904297,0-1.25,0.5595703-1.25,1.25s0.5595703,1.25,1.25,1.25h7.5175781   c0.6904297,0,1.25-0.5595703,1.25-1.25S60.59375,45.0673828,59.9033203,45.0673828z" />
      <path d="M59.9033203,51.8012695H41.8935547c-0.6904297,0-1.25,0.5595703-1.25,1.25s0.5595703,1.25,1.25,1.25h18.0097656   c0.6904297,0,1.25-0.5595703,1.25-1.25S60.59375,51.8012695,59.9033203,51.8012695z" />
      <path d="M59.9033203,56.8911133H41.8935547c-0.6904297,0-1.25,0.5595703-1.25,1.25s0.5595703,1.25,1.25,1.25h18.0097656   c0.6904297,0,1.25-0.5595703,1.25-1.25S60.59375,56.8911133,59.9033203,56.8911133z" />
      <path d="M59.9033203,61.980957H41.8935547c-0.6904297,0-1.25,0.5595703-1.25,1.25s0.5595703,1.25,1.25,1.25h18.0097656   c0.6904297,0,1.25-0.5595703,1.25-1.25S60.59375,61.980957,59.9033203,61.980957z" />
    </g>
  </svg>
);

export default Icon;
