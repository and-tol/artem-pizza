<section>
  <label>Radio Group</label>
  <Controller
    as={
      <RadioGroup aria-label='gender'>
        <FormControlLabel value='female' control={<Radio />} label='Female' />
        <FormControlLabel value='male' control={<Radio />} label='Male' />
      </RadioGroup>
    }
    name='RadioGroup'
    control={control}
  />
</section>;
