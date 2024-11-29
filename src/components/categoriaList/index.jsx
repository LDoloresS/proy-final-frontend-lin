import categoriaListData from './categoriaListData.js';

const CategoriaList = () => {
    return (
        <ul className="space-y-4">
            {categoriaListData.map((item) => {
                const src = new URL(`../../assets/categories/${item.icon}.svg`, import.meta.url).href;
                return (
                    <li key={item.id} className="flex items-center gap-2">
                        <span className="mr-2">
                            <img src={src} className="w-4 h-4" />
                        </span>
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoriaList;