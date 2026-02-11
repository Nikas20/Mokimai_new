def clamp_discount_rate(rate, /, *, minimum=0.0, maximum=0.25):
    if rate < minimum:
        return minimum
    if rate > maximum:
        return maximum
    return rate