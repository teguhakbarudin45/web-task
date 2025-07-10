import "../style/form.css";

const FormTask = ({ onSave, onCancel, formData, onChange }) => {
  return (
    <section className="container-form">
      <form className="form" onSubmit={onSave}>
        <section className="form-left">
          {/* Title */}
          <div>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title..."
              value={formData.title}
              onChange={onChange}
              required
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label htmlFor="description">Description : </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Description..."
              value={formData.description}
              onChange={onChange}
            ></textarea>
          </div>
        </section>

        <section className="form-right">
          {/* Date */}
          <div>
            <div>
              <label htmlFor="date">Due Date :</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="priority">Priority :</label>
              <select
                name="priority"
                id="priority"
                value={formData.priority}
                onChange={onChange}
                required
              >
                <option value=""> --- Pilih Priority --- </option>
                <option value="High"> High </option>
                <option value="Medium"> Medium </option>
                <option value="Low"> Low </option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="btn-tasks">
            <button type="button" className="btn btn-cancel" onClick={onCancel}>
              Cancel
            </button>

            <button type="submit" className="btn btn-save">
              Save
            </button>
          </div>
        </section>
      </form>
    </section>
  );
};

export default FormTask;
