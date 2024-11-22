import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ getPage, onCategorySelect, handleSortChange }) => {
  const categories = [
    "أكشن",
    "مغامرة",
    "رسوم متحركة",
    "كوميديا",
    "جريمة",
    "وثائقي",
    "دراما",
    "عائلي",
    "خيال",
    "تاريخ",
    "رعب",
    "موسيقى",
    "غموض",
    "رومانسية",
    "خيال علمي",
    "فيلم تلفزيوني",
    "إثارة",
    "حرب",
    "ويسترن",
  ];

  const handleCategoryClick = (category) => {
    onCategorySelect(category); // استدعاء الدالة عند اختيار تصنيف
  };

  return (
    <div className="sidebar">
      <div>
        <Dropdown as={ButtonGroup} className="mb-3">
          <DropdownButton
            variant="secondary"
            title="اختر تصنيف"
            id="dropdown-split-basic"
          >
            {categories.map((category) => (
              <Dropdown.Item
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Dropdown>
      </div>
      <div>
        <Dropdown as={ButtonGroup} className="mb-3">
          <DropdownButton
            variant="secondary"
            title="اختر ترتيب"
            id="dropdown-split-basic-sort"
          >
            <Dropdown.Item onClick={() => handleSortChange("popular")}>
              الأكثر شعبية
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange("top_rated")}>
              الأعلى تقييماً
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange("now_playing")}>
              حالياً في السينما
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange("upcoming")}>
              الأفلام القادمة
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
      <div>
        <Link to="/mylist" className="mylist">
          قائمتى
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
