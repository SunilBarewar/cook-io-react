import "./taglist.css"
import { tags } from '../../constants'
import { Link } from "react-router-dom"
const TagList = () => {
    return (
        <section className="section tag" aria-label="tag-label">
            <div className="container">

                <h2 className="section-title display-small" id="tag-label">

                    Choose your health preference.

                </h2>
                <p className="body-medium section-text">
                    Choosing your health preference is an important step towards achieving a healthier lifestyle.
                </p>

                <div className="tag-list">
                    {
                        tags.map((tag) => {
                            return (
                                <Link
                                    to={`/recipes?health=${tag}`}
                                    className="badge-btn body-medium has-state"
                                    key={tag}
                                >
                                    {tag}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default TagList