       <FormControl className={styles.formControl}>
          <label htmlFor='image'>
            Изображение ингредиента
            <input
              id='image'
              name='image'
              ref={register}
              type='file'
              accept='.png'
              // hidden
            />
            <Button variant='outlined' className={styles.btnImg}>
              Добавить
            </Button>
          </label>
          {errors.image && <div>{errors.image?.message}</div>}
        </FormControl>
        <FormControl className={styles.formControl}>
          <input
            id='thumbnail'
            ref={register}
            type='file'
            name='thumbnail'
            accept='.png'
            hidden
          />
          <label htmlFor='thumbnail'>
            Уменьшенное изображение ингредиента
            <Button variant='outlined' className={styles.btnImg}>
              Добавить
            </Button>
          </label>
          {errors.thumbnail && <div>{errors.thumbnail?.message}</div>}
        </FormControl>